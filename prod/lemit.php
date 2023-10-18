<?php
require("utils.php");

$cpf = $_GET['cpf'];

if(strlen($cpf)==11)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.lemit.com.br/api/v1/consulta/pessoa/');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "documento={$cpf}");

    $headers = array();
    $headers[] = 'Authorization: Bearer ewKJuveWjuFVKJzXe0Ca6FmPn8Kx7lnPCqh1egak';
    $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);
    $result = json_decode($result);

    echo json_encode($result);
	
}
?>
