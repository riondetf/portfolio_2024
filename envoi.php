<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = sanitize_input($_POST["email"]);
    $message = sanitize_input($_POST["message"]);

    $message = wordwrap($message, 70);

    $headers = "From: $email";

    if(mail("flav3804@gmail.com", "New message from your website", $message, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
}

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    Email: <input type="email" name="email">
    Message: <textarea name="message"></textarea>
    <input type="submit">
</form>