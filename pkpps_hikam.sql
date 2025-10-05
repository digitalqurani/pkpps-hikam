-- pkpps_hikam SQL (tables only)
CREATE DATABASE IF NOT EXISTS pkpps_hikam;
USE pkpps_hikam;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin','guru','santri') NOT NULL,
  nama_lengkap VARCHAR(150),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS santri (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(150),
  kelas VARCHAR(50),
  kamar VARCHAR(50),
  wali VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS nilai (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_santri INT,
  mapel VARCHAR(100),
  nilai INT,
  semester VARCHAR(20),
  FOREIGN KEY (id_santri) REFERENCES santri(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS absensi (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_santri INT,
  tanggal DATE,
  status ENUM('Hadir','Izin','Sakit','Alpha'),
  FOREIGN KEY (id_santri) REFERENCES santri(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS jadwal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hari VARCHAR(50),
  jam VARCHAR(50),
  mapel VARCHAR(100),
  guru VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS pengumuman (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(150),
  isi TEXT,
  dibuat_oleh VARCHAR(100),
  tanggal DATE
);

CREATE TABLE IF NOT EXISTS soal (
  id_soal INT AUTO_INCREMENT PRIMARY KEY,
  indikator TEXT,
  soal TEXT,
  jawaban TEXT
);

CREATE TABLE IF NOT EXISTS ujian (
  id_ujian INT AUTO_INCREMENT PRIMARY KEY,
  id_soal INT,
  id_santri INT,
  hasil TEXT,
  FOREIGN KEY (id_soal) REFERENCES soal(id_soal) ON DELETE SET NULL,
  FOREIGN KEY (id_santri) REFERENCES santri(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS hataman (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_santri INT,
  surah VARCHAR(150),
  ayat VARCHAR(100),
  status VARCHAR(50)
);
