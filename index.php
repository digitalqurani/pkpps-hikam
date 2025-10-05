<?php
// pkpps-hikam - landing page (public)
include 'config.php';
?>
<!doctype html>
<html>
<head><meta charset="utf-8"><title>PKPPS Al-Hikam</title>
<link rel="stylesheet" href="assets/style.css"></head>
<body>
<header><h1>PKPPS Al-Hikam</h1><p>Selamat datang di PKPPS Al-Hikam - pkpps-hikam.mdiq.biz.id</p></header>
<nav><a href="index.php">Home</a> | <a href="public/visi.php">Visi & Misi</a> | <a href="public/daftar.php">Pendaftaran</a> | <a href="login.php">Login</a></nav>
<main>
<section>
<h2>Profil Singkat</h2>
<p>Website resmi PKPPS Al-Hikam — sistem manajemen sekolah sederhana.</p>
</section>
<section>
<h2>Pengumuman Terbaru</h2>
<ul>
<?php
$q = mysqli_query($conn, "SELECT id, judul, tanggal FROM pengumuman ORDER BY tanggal DESC LIMIT 5");
while($r = mysqli_fetch_assoc($q)){
    echo '<li><strong>'.htmlspecialchars($r['judul']).'</strong> — '.htmlspecialchars($r['tanggal']).'</li>';
}
?>
</ul>
</section>
</main>
<footer><small>&copy; PKPPS Al-Hikam</small></footer>
</body></html>