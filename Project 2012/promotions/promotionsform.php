<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">

<meta name="author" content="Christopher Walker">

</head>
<body>

<?php

function fix($data) {
$data1=trim($data);
$data2=stripslashes($data1);
$data3=htmlspecialchars($data2);
return $data3;
}

function fixemail($emaildata) {
$emaildata1=filter_var($emaildata, FILTER_SANITIZE_EMAIL);
return $emaildata1;
}

function checkemail($emaildata2) {
if (filter_var($emaildata2, FILTER_VALIDATE_EMAIL)) {
return true;
} else {
return false;
}
}

$name=fix($_POST["name"]);
$company=fix($_POST["company"]);
$businesstype=fix($_POST["businesstype"]);
$email=fixemail($_POST["email"]);
$contactnumber=fix($_POST["contactnumber"]);

$content="Name: ".$name."\nCompany: ".$company."\nBusiness Type: ".$businesstype."\nEmail: ".$email."\nContact Number: ".$contactnumber;
$contentwrapped=wordwrap($content,70);

$checkedemail=checkemail($email);
if ($name==null||$company==null||$businesstype==null||$email==null||$contactnumber==null||$checkedemail==false) {
echo "Please fill in all of the required fields on the form and enter a valid email address.";
} else {
mail("info@something.com","Message sent via www.something.com/contactus/",$contentwrapped,"From:$name <$email>","-f info@something.com");
echo "Thank you for your message. We will get back to you shortly.";

}

?>

<br>
<a href="../">Click here to go back to www.something.com</a>

</body>
</html>