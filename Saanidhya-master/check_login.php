<?php
// Start the session
session_start();

// Check if user is logged in
$logged_in = isset($_SESSION['user_id']) && !empty($_SESSION['user_id']);
$username = $_SESSION['username'] ?? '';

// Return JSON response
header('Content-Type: application/json');
echo json_encode([
    'logged_in' => $logged_in,
    'username' => $username
]);
?>