<?php
namespace Api\Controller;

use Zend\View\Model\JsonModel;
use Zend\Db\ResultSet\HydratingResultSet;
use Core\Stdlib\StdClass;
use Core\Hydrator\ObjectProperty;
use Core\Hydrator\Strategy\ValueStrategy;
use Core\Mvc\Controller\AbstractRestfulController;
use Zend\Json\Json;


class TreeController extends AbstractRestfulController
{
    
    /**
     * Construct
     */
    public function __construct()
    {
        
    }

    public function listarNfEstoqueAction()
    {
        $data = array();
        
        try {

            // $pId = $this->params()->fromQuery('node',null);
            $xpId = $this->params()->fromQuery('node',null);
            
            $expId = explode('|', $xpId);
            $pId = $expId[0];
            $andSql= '';
            if(count($expId)>2){
                $pId = $expId[count($expId)-2];
                for ($i=2; $i < count($expId); $i++) { 
                    $andSql .= ($i % 2 == 0 ? " and ID_".$expId[$i-1]." = ".$expId[$i] : "" );
                }
            }

            // print "$andSql";

            $em = $this->getEntityManager();

            $lvs = ['REDE', 'FORNECEDOR', 'MARCA', 'EMPRESA'];
            $nodes = array();
            foreach($lvs as $k => $n){
                if($k === 0){
                    $nodes['root'] = array( $lvs[$k], $lvs[$k], $lvs[$k] );
                } else {
                    $cols = array();
                    for($i=0; $i < $k; $i++){
                        $cols[] = $lvs[$i];
                    }

                    $cols[] = $n;

                    // $nodes[$lvs[$k-1]] = array( implode(", ", $cols), $lvs[$k], "'".$lvs[$k]."'||'|'||ID_".$lvs[$k] );

                    //$idWhere .= "||'|'||".$lvs[$k];

                    $nodes[$lvs[$k-1]] = array(
                        implode(", ", $cols), 
                        $lvs[$k], 
                        ($xpId === 'root' ? null : "'".$xpId."|'" ) ."||"."'".$lvs[$k]."'"."||'|'||ID_".$lvs[$k]
                    );
                }
            }
            // ID_REDE||'|'||ID_FORNECEDOR||'|'||ID_MARCA 
            // print "$pId\n";
            // print_r($nodes);
            // exit;

            $groupBy = $nodes[$pId][0];
            $groupDescription = $nodes[$pId][1];
            $groupId = $nodes[$pId][2];
            // $groupWhere = $nodes[$pId][3];
            $leaf = ( $pId === $lvs[count($lvs)-2] ? "'true'" : "'false'" );
            
            $sql = "select $groupId as id,
                           $groupDescription as grupo,
                           $leaf as leaf,
                           sum(qtde) as qtde 
                        from (select 'REDE' as id_rede, 'REDE' as rede, 
                                     c.id_pessoa as id_fornecedor, p.nome as fornecedor, 
                                     c.id_empresa, em.apelido as empresa, 
                                     m.id_marca, m.descricao as marca,
                                     --i.cod_item||ca.descricao as cod_item,
                                     i.descricao, ci.qtde 
                                from ms.cp_compra c, ms.cp_compra_item ci, ms.pessoa p, ms.empresa em,
                                        ms.tb_item_categoria ic, ms.tb_marca m, ms.tb_item i, ms.tb_categoria ca
                                where c.id_empresa = ci.id_empresa
                                and c.id_compra = ci.id_compra
                                and c.id_pessoa = p.id_pessoa 
                                and c.id_empresa = em.id_empresa 
                                and ci.id_item = ic.id_item 
                                and ci.id_categoria = ic.id_categoria 
                                and ic.id_marca = m.id_marca 
                                and ci.id_item = i.id_item 
                                and ci.id_categoria = ca.id_categoria 
                                --and c.id_pessoa in( 90852914000254, 8304706000159, 89086144000701, 843966000271 )
                                --and m.descricao in ('SUSPENSYS','SUSPENSYS-JOST','CASTERTECH','CASTERTECH CD','FREIOS MASTER','FREIOS MASTER CD')
                                --and m.descricao = 'JOST' 
                                and c.status = 'A'
                                and NVL(c.status_pre_entrada, 0) <> 1
                                and trunc(c.data_entrada,'MM') = '01/01/2020')
                        where 1=1
                          
                        $andSql

                        group by $groupBy, $groupId";
           
            // echo $sql;
            // exit;

            $conn = $em->getConnection();
            $stmt = $conn->prepare($sql);
            // $stmt->bindValue(1, $pEmp);
            
            $stmt->execute();
            $results = $stmt->fetchAll();

            $hydrator = new ObjectProperty;
            $hydrator->addStrategy('qt_mes', new ValueStrategy);
            $hydrator->addStrategy('qt_estoque_atual', new ValueStrategy);
            $stdClass = new StdClass;
            $resultSet = new HydratingResultSet($hydrator, $stdClass);
            $resultSet->initialize($results);

            $data = array();
            foreach ($resultSet as $row) {
                $data[] = $hydrator->extract($row);
            }

            $this->setCallbackData($data);

            $objReturn = $this->getCallbackModel();
            
        } catch (\Exception $e) {
            $objReturn = $this->setCallbackError($e->getMessage());
        }
        
        return $objReturn;
    }
    
}
