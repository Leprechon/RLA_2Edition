<?php
if ($_POST) {
  $fullName = $_POST['fullName'];
  $contact = $_POST['contact'];
  $email = $_POST['email'];
  $service = $_POST['service'];
  $date = $_POST['date'];
  $time = $_POST['time'];

  $to = "clinic@rlanoindental.com";
  $subject = "New Appointment Request";
  $message = "Name: $fullName\nContact: $contact\nEmail: $email\nService: $service\nDate: $date\nTime: $time";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo "<h2>Thank you!</h2><p>Your appointment request has been sent. We'll confirm via email.</p>";
  } else {
    echo "<h2>Error</h2><p>Failed to send. Please try again.</p>";
  }
}
?>