<?php
include '../connection/config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $stmt=$con->prepare("SELECT * FROM area");
        $stmt->execute();
        $area = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

        echo json_encode($area);
        break;
        mysqli_close($con);        
}
?>