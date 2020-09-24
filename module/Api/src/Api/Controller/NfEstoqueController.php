<?php
namespace Api\Controller;

use Zend\View\Model\JsonModel;
use Zend\Db\ResultSet\HydratingResultSet;
use Core\Stdlib\StdClass;
use Core\Hydrator\ObjectProperty;
use Core\Hydrator\Strategy\ValueStrategy;
use Core\Mvc\Controller\AbstractRestfulController;
use Zend\Json\Json;


class NfestoqueController extends AbstractRestfulController
{
    
    /**
     * Construct
     */
    public function __construct()
    {
        
    }

    public function listarEmpresasAction()
    {
        $data = array();
        
        try {

            $session = $this->getSession();
            $usuario = $session['info'];

            $em = $this->getEntityManager();

            $sql = "
                select id_empresa, apelido as nome from ms.empresa 
                where id_matriz = 1 
                and id_empresa = 20
                union all
                select * from (
                    select id_empresa, apelido as nome from ms.empresa 
                    where id_matriz = 1 
                    and id_empresa not in (26, 11, 28, 27, 20)
                    order by apelido
                )
            ";
            
            $conn = $em->getConnection();
            $stmt = $conn->prepare($sql);
            
            $stmt->execute();
            $results = $stmt->fetchAll();

            $hydrator = new ObjectProperty;
            $stdClass = new StdClass;
            $resultSet = new HydratingResultSet($hydrator, $stdClass);
            $resultSet->initialize($results);

            $data = array();
            foreach ($resultSet as $row) {
                $data[] = $hydrator->extract($row);
            }

            $this->setCallbackData($data);
            
        } catch (\Exception $e) {
            $this->setCallbackError($e->getMessage());
        }
        
        return $this->getCallbackModel();
    }

    public function listarEmpresaUserAction()
    {
        $data = array();
        
        try {

            $session = $this->getSession();
            $usuario = $session['info'];

            $em = $this->getEntityManager();
            

            if($usuario->empresa != "EC"){

                $sql = "select id_empresa, apelido as nome
                            from ms.empresa 
                        where id_matriz = 1 
                        and apelido = '".$usuario->empresa."'
                    ";
            }else{

                $sql = "select id_empresa, apelido as nome
                            from ms.empresa 
                        where id_matriz = 1 
                        and id_empresa = 20
                        union all
                        select * from (
                            select id_empresa, apelido as nome from ms.empresa 
                            where id_matriz = 1 
                            and id_empresa not in (26, 11, 28, 27, 20)
                            order by apelido
                        )
                ";

            }
            
            $conn = $em->getConnection();
            $stmt = $conn->prepare($sql);
            
            $stmt->execute();
            $results = $stmt->fetchAll();

            $hydrator = new ObjectProperty;
            $stdClass = new StdClass;
            $resultSet = new HydratingResultSet($hydrator, $stdClass);
            $resultSet->initialize($results);

            $data = array();
            foreach ($resultSet as $row) {
                $data[] = $hydrator->extract($row);
            }

            $this->setCallbackData($data);
            
        } catch (\Exception $e) {
            $this->setCallbackError($e->getMessage());
        }
        
        return $this->getCallbackModel();
    }

    public function listarNfEstoqueAction()
    {
        $data = array();
        
        try {

            // $pEmp = $this->params()->fromQuery('emp',null);
            // $pCod = $this->params()->fromQuery('codigo',null);


            $em = $this->getEntityManager();
            
            $sql = "select to_char(v.id_empresa)||' - '||to_char(v.data_emissao,'yyyy')||' - '||v.id_item  grupo, 
                        v.id_empresa,
                        v.id_item,
                        to_char(v.data_emissao,'mm/yyyy') vd_mes,
                        to_char(v.data_emissao,'yyyy') vd_ano,
                        sum(v.qtde) qt_mes
                    from pricing.ie_ve_venda_item v
                where nvl(v.qtde,0) > 0
                --and v.id_empresa = 10
                and v.data_emissao >= '01012017'
                and v.id_item = 100869
                and rownum < 1000
                group by v.id_empresa,v.id_item,to_char(v.data_emissao,'mm/yyyy'),to_char(v.data_emissao,'yyyy')
                order by 5 desc";

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
            
        } catch (\Exception $e) {
            $this->setCallbackError($e->getMessage());
        }
        
        return $this->getCallbackModel();
    }
    
}
