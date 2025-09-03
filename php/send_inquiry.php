<?php
if ($_POST) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $to = "clinic@rlanoindental.com";
  $fullSubject = "Inquiry: $subject";
  $fullMessage = "From: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $fullSubject, $fullMessage, $headers)) {
    echo "<h2>Thank you!</h2><p>Your inquiry has been sent. We'll respond via email.</p>";
  } else {
    echo "<h2>Error</h2><p>Failed to send. Please try again.</p>";
  }
}
?>