<?php
// Start output buffering to prevent any output before JSON
ob_start();

require_once 'config.php';

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Function to sanitize input
function sanitize_input($data) {
    if ($data === null) {
        return '';
    }
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to send JSON response
function send_json_response($success, $message) {
    // Clear any previous output
    ob_clean();
    header('Content-Type: application/json');
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

// Log the received POST data (for debugging)
// error_log("Received POST data: " . print_r($_POST, true));

// Initialize session handling
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Handle login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'login') {
    // Clear any previous output
    ob_clean();
    
    if (!isset($_POST['username']) || !isset($_POST['password'])) {
        send_json_response(false, 'Please fill in all fields');
    }
    
    $username = sanitize_input($_POST['username']);
    $password = $_POST['password'];
    
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        error_log("Database connection failed: " . $conn->connect_error);
        send_json_response(false, 'Database connection failed');
    }
    
    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Set session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['logged_in'] = true;
            
            // Log session data for debugging
            error_log("Login successful, session data: " . print_r($_SESSION, true));
            
            // Set a cookie as a fallback mechanism
            setcookie("username", $user['username'], time() + 86400, "/"); // 1 day
            
            send_json_response(true, 'Login successful');
        } else {
            send_json_response(false, 'Invalid password');
        }
    } else {
        send_json_response(false, 'User not found');
    }
    
    $stmt->close();
    $conn->close();
}

// Handle signup
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'signup') {
    // Clear any previous output
    ob_clean();
    
    // Check if all required fields are present
    $required_fields = ['username', 'email', 'password', 'full_name'];
    $missing_fields = [];
    
    foreach ($required_fields as $field) {
        if (!isset($_POST[$field]) || empty($_POST[$field])) {
            $missing_fields[] = $field;
        }
    }
    
    if (!empty($missing_fields)) {
        error_log("Missing fields: " . implode(', ', $missing_fields));
        send_json_response(false, 'Missing required fields: ' . implode(', ', $missing_fields));
    }
    
    $username = sanitize_input($_POST['username']);
    $email = sanitize_input($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $full_name = sanitize_input($_POST['full_name']);
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        error_log("Invalid email format: " . $email);
        send_json_response(false, 'Invalid email format');
    }
    
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        error_log("Database connection failed: " . $conn->connect_error);
        send_json_response(false, 'Database connection failed');
    }
    
    // Check if username or email already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        error_log("Username or email already exists: " . $username . ", " . $email);
        send_json_response(false, 'Username or email already exists');
    }
    
    $stmt = $conn->prepare("INSERT INTO users (username, email, password, full_name) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $email, $password, $full_name);
    
    if ($stmt->execute()) {
        error_log("User registered successfully: " . $username);
        send_json_response(true, 'Registration successful! You can now log in.');
    } else {
        error_log("Registration failed: " . $stmt->error);
        send_json_response(false, 'Registration failed: ' . $stmt->error);
    }
    
    $stmt->close();
    $conn->close();
}
?> 