<?php
include '../connection/config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));

        $email = $user->email;
        $hashed = password_hash($user->password, PASSWORD_DEFAULT);
        $firstname = $user->fname;
        $lastname = $user->lname;
        $area = $user->area;
        $Pk_infoId = (rand(1, 10000));
        $Pk_areaId = (rand(1, 10000));

        $check = $con->prepare("SELECT * FROM user_account WHERE email = ?;");
        $check->bind_param("s", $email);
        $check->execute();
        $checking = $check->get_result();

        $check_area = $con->prepare("SELECT * FROM area WHERE area = ?;");
        $check_area->bind_param("s", $area);
        $check_area->execute();
        $result_area = $check_area->get_result();


        if (mysqli_num_rows($checking) < 1) {
            if (mysqli_num_rows($result_area) < 1) {
                $stmt=$con->prepare("INSERT INTO area(Pk_areaId, area) VALUES (?,?)");
                $stmt->bind_param("is", $Pk_areaId, $area);
                $stmt->execute();

                $info=$con->prepare("INSERT INTO user_info(Pk_infoId, Fk_areaId, firstName, lastName) VALUES (?,?,?,?)");
                $info->bind_param("iiss", $Pk_infoId, $Pk_areaId, $firstname, $lastname);
                $info->execute();

                $account=$con->prepare("INSERT INTO user_account(Fk_infoId, email, `password`) VALUES (?,?,?)");
                $account->bind_param("iss", $Pk_infoId, $email, $hashed);
                $account->execute();
            } else{
                while ($res = mysqli_fetch_assoc($result_area)) {
                    $areaId = $res['Pk_areaId'];
                    $info=$con->prepare("INSERT INTO user_info(Pk_infoId, Fk_areaId, firstName, lastName) VALUES (?,?,?,?)");
                    $info->bind_param("iiss", $Pk_infoId, $areaId, $firstname, $lastname);
                    $info->execute();

                    $account=$con->prepare("INSERT INTO user_account(Fk_infoId, email, `password`) VALUES (?,?,?)");
                    $account->bind_param("iss", $Pk_infoId, $email, $hashed);
                    $account->execute();
                }
            }
            $data = ['status' => 1, 'message' => "Account Added Successfully!"];
        } else {
            $data = ['status' => 2, 'message' => "Account Already Exist"];
        }
        echo json_encode($data);
        break;
        mysqli_close($con);
}
