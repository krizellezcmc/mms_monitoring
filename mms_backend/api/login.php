<?php
include '../connection/config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $email = $user->email;
        $password = $user->password;

        $stmt = $con->prepare("SELECT * FROM user_account WHERE email = ?;");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if (mysqli_num_rows($result) != 0) {
            while ($user = mysqli_fetch_assoc($result)) {
                if (password_verify($password, $user['password'])) {
                    $data = ['status' => 1, 'message' => 'Success'];
                }else{
                    $data = ['status' => 2, 'message' => 'Invalid'];
                }
            }
        }
        echo json_encode($data);
        break;
        mysqli_close($con);
}
