<?
$recepint = "zed_zed228@ro.ru";
$sitename = "Draft ideas";

$username = trim($_POST["username"]);
$review = trim($_POST["review"]);
$message = "Никнейм: $username \nОтзыв: $revies";
$pagetitle = "Отзыв \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>