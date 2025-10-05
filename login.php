<?php
session_start();
include "config.php";
if (isset($_POST['login'])) {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $stmt = mysqli_prepare($conn, "SELECT id, username, password, role, nama_lengkap FROM users WHERE username = ? LIMIT 1");
    mysqli_stmt_bind_param($stmt, 's', $username);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    $data = mysqli_fetch_assoc($res);
    if ($data && password_verify($password, $data['password'])) {
        $_SESSION['user_id'] = $data['id'];
        $_SESSION['role'] = $data['role'];
        $_SESSION['nama'] = $data['nama_lengkap'];
        if ($data['role']=='admin') header('Location: admin/index.php');
        elseif ($data['role']=='guru') header('Location: guru/index.php');
        else header('Location: santri/index.php');
        exit;
    } else $error = 'Username atau password salah.';
}
?>
<!doctype html><html><head><meta charset="utf-8"><title>Login PKPPS</title></head>
<body>
<h2>Login</h2>
<form method="post">
<input name="username" placeholder="username" required><br>
<input name="password" type="password" placeholder="password" required><br>
<button name="login">Login</button>
</form>
<?php if(!empty($error)) echo '<p style="color:red">'.htmlspecialchars($error).'</p>'; ?>
</body></html>