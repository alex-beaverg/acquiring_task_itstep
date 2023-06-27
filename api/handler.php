<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Results</title>
        <link rel="icon" type="image/x-icon" href="../images/favicon.ico">
        <link rel="stylesheet" href="../style/styles.css" type="text/css">
    </head>
    <body>

        <?php

	$client = $_POST["client"];
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
	Client: ".$client."<br>
        Connection: ".$connection."<br>
        Integration: ".$integration."<br>
        Payment method: ".$payment_method."<br>
        Payers: ".$payers."<br>
        Payment system: ".$payment_system."<br>
        Bank: ".$bank."<br><br>";
        ?>

    </body>
</html>
