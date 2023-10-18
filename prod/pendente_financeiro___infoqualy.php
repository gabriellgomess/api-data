<?php
$cpf = $_GET["cpf"];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://paineljob.com.br/api/api_dados_pf.php',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
"user": "mailing@bemservicos.com",
"psw": "Brasil2023",
"doc": "'.$cpf.'"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: text/plain',
    'Cookie: __goc_session__=htizeombabkcynirxlhlfprymfsqjjiy'
  ),
));
$response = curl_exec($curl);
curl_close($curl);

$response = json_decode($response);

echo json_encode($response);
?>

