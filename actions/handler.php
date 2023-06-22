<?php

$connection = $_POST["connection"];

if (isset($_POST["integration"])) {
    $integration = $_POST["integration"];
} else {
    $integration = '-';
}

$payment_method = $_POST["payment_method"];
$payers = $_POST["payers"];
$payment_system = $_POST["payment_system"];
$bank = $_POST["bank"];

echo "<b>Information:</b> <br><br>
Connection: ".$connection."<br>
Integration: ".$integration."<br>
Payment method: ".$payment_method."<br>
Payers: ".$payers."<br>
Payment system: ".$payment_system."<br>
Bank: ".$bank."<br><br>";

$file = '../data/data.json';
$arr = array(
    'Connection' => $connection,
    'Integration' => $integration,
    'Payment method' => $payment_method,
    'Payers' => $payers,
    'Payment system' => $payment_system,
    'Bank' => $bank
);
$json_string = json_encode($arr);
file_put_contents($file, $json_string);

$data = file_get_contents('../data/data.json');
$data_string = json_encode(json_decode($data), JSON_PRETTY_PRINT);
echo '<b>JSON file:</b> <br>';
echo '<pre>' . $data_string . '</pre>';
?>