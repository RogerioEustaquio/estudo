<?php
namespace Api\Controller;

use Zend\View\Model\JsonModel;
use Zend\Db\ResultSet\HydratingResultSet;
use Core\Stdlib\StdClass;
use Core\Hydrator\ObjectProperty;
use Core\Hydrator\Strategy\ValueStrategy;
use Core\Mvc\Controller\AbstractRestfulController;
use Zend\Json\Json;


class HighchartsController extends AbstractRestfulController
{
    
    /**
     * Construct
     */
    public function __construct()
    {
        
    }

    public function listaritemAction()
    {
        $data = array();
        
        try {

            // $pNiveis = $this->params()->fromQuery('niveis',null);
            
            $sql = "select e.apelido,
                            e.nome,
                            to_char(c.data_entrada,'yyyy') ano,
                            sum(nvl(c.tot_nota,0)) total_nota
                        from ms.cp_compra c,
                            ms.cp_compra_item ci,
                            ms.empresa e,
                            ms.pessoa_endereco pe
                    where c.id_empresa = ci.id_empresa
                    and c.id_compra = ci.id_compra
                    and c.id_empresa = e.id_empresa
                    and c.id_pessoa = pe.id_pessoa(+)
                    and c.data_entrada >= '01012019'
                    --and rownum < 10
                    group by e.apelido, e.nome, to_char(c.data_entrada,'yyyy')
                    order by ano";
           

            $em = $this->getEntityManager();
            $conn = $em->getConnection();
            $stmt = $conn->prepare($sql);
            
            $stmt->execute();
            $results = $stmt->fetchAll();

            $hydrator = new ObjectProperty;
            // $hydrator->addStrategy('qt_mes', new ValueStrategy);
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

    public function listarElementosAction()
    {
        $data = array();
        
        try {

            $pNode = $this->params()->fromQuery('node',null);

            $data = array();
            $pkey = 'idKey';
            $data[] = [$pkey => 'REDE'];
            $data[] = [$pkey => 'FORNECEDOR'];
            $data[] = [$pkey => 'FORNECEDOR2'];
            $data[] = [$pkey => 'MARCA'];
            $data[] = [$pkey => 'EMPRESA'];

            $this->setCallbackData($data);

            $objReturn = $this->getCallbackModel();
            
        } catch (\Exception $e) {
            $objReturn = $this->setCallbackError($e->getMessage());
        }
        
        return $objReturn;
    }
    
}
