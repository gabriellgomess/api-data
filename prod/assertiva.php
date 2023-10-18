<?php

// Liberar acesso para qualquer origem
header('Access-Control-Allow-Origin: *');



$curl = curl_init();

$username = 'fQ43cf+Qngqh7nJxLXqm8kJwOSyxJy2Iu9H0GYMGr0DaY+r97CZWWDzFyo50OIq1mxim+UYsb84ItdRAjSTZdw==';
$password = 'Ou9dXUMf6Lfmwou+kh9ppzE38zz6ltLV5kAlQpxVnBg/vmyBNQRqT+o7ZTWUcYAj32y2/mgVPnZQPdm9BcuDpg==';

$credentials = base64_encode($username . ':' . $password);

curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.assertivasolucoes.com.br/oauth2/v3/token',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => 'grant_type=client_credentials',
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/x-www-form-urlencoded',
        "Authorization: Basic $credentials"
    ),
));

$responseGetToken = curl_exec($curl);

$dataToken = json_decode($responseGetToken, true);

$token = $dataToken['access_token'];


$curl = curl_init();

$cpf = $_GET["cpf"];

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.assertivasolucoes.com.br/localize/v3/cpf?cpf=$cpf&idFinalidade=1",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
        "Authorization: Bearer $token"
    ),
));

$response = curl_exec($curl);

curl_close($curl);
$data = json_decode($response, true);

echo json_encode($data);
