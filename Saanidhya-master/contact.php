<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    // Validate input
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }

    // If no errors, send email
    if (empty($errors)) {
        // Set recipient email (replace with your email)
        $to = "3440anil@gmail.com";
        
        // Set email subject
        $subject = "New Contact Form Submission from SAANIDHYA";
        
        // Build email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        
        // Set email headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // Send email
        if (mail($to, $subject, $email_content, $headers)) {
            $response = [
                'success' => true,
                'message' => 'Thank you! Your message has been sent successfully.'
            ];
        } else {
            $response = [
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later.'
            ];
        }
    } else {
        $response = [
            'success' => false,
            'message' => 'Please fix the following errors:',
            'errors' => $errors
        ];
    }

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?> 