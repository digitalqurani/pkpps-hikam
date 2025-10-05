<?php
// setup.php - RUN ONCE after upload, then DELETE for security.
// It will create database tables (if not exists) and create default users with password_hash.
include 'config.php';

// Create tables (if not exists)
$sql = file_get_contents('pkpps_hikam.sql');
if ($sql) {
    mysqli_multi_query($conn, $sql);
    // flush multi queries
    do { } while (mysqli_more_results($conn) && mysqli_next_result($conn));
    echo "Tables created/imported.\n";
}

// default users
$users = [
    ['Administrator','admin','admin123','admin'],
    ['Ustadz Ahmad','guru1','guru123','guru'],
    ['Ahmad Fauzan','santri1','santri123','santri']
];

foreach($users as $u){
    $nama = $u[0]; $username = $u[1]; $pass = $u[2]; $role = $u[3];
    $check = mysqli_prepare($conn, 'SELECT id FROM users WHERE username=? LIMIT 1');
    mysqli_stmt_bind_param($check, 's', $username); mysqli_stmt_execute($check);
    mysqli_stmt_store_result($check);
    if (mysqli_stmt_num_rows($check)==0) {
        $hash = password_hash($pass, PASSWORD_DEFAULT);
        $ins = mysqli_prepare($conn, 'INSERT INTO users (username, password, role, nama_lengkap) VALUES (?,?,?,?)');
        mysqli_stmt_bind_param($ins, 'ssss', $username, $hash, $role, $nama);
        mysqli_stmt_execute($ins);
        echo "Created user: $username\n";
    } else echo "User $username exists\n";
    mysqli_stmt_close($check);
}
echo "\nSETUP FINISHED. PLEASE DELETE setup.php FOR SECURITY.\n";
?>