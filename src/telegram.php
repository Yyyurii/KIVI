<?php

/* https://api.telegram.org/bot1856013739:AAEnIkPtoVTBYrJsY9VXcarpfV7YpXWvFFM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "1856013739:AAEnIkPtoVTBYrJsY9VXcarpfV7YpXWvFFM";
$chat_id = "-517467730";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>