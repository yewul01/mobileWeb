<?php

$id = $_POST['id'];
$pass = $_POST['pass'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$regist_day = date('Y-m-d');

$con = mysqli_connect('localhost', 'user1', '12345', 'sample');
$sql = "insert into cafetourmember (id, pass, name, tel, regist_day) ";
$sql .= "values('$id', '$pass', '$name', '$tel', '$regist_day')";

mysqli_query($con, $sql);
mysqli_close($con);

echo "
    <script>
        location.href = 'index.php'
    </script>
";

?>