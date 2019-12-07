PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE tabel_jurusan(
id_jurusan varchar(30),
nama_jurusan varchar(30)
, primary key(id_jurusan)
);
INSERT INTO tabel_jurusan VALUES('JDID_001','TEKNIK KIMIA');
INSERT INTO tabel_jurusan VALUES('JDID_002','TEKNIK INFORMATIKA');
INSERT INTO tabel_jurusan VALUES('JDID_003','TEKNIK INDUSTRI');
INSERT INTO tabel_jurusan VALUES('JDID_004','TEKNIK PERTANIAN');
INSERT INTO tabel_jurusan VALUES('JDID_005','TEKNIK MESIN');
CREATE TABLE tabel_mahasiswa(
NIM varchar(10),
nama varchar(50),
Alamat varchar(100),
Jurusan varchar(30)
,primary key(NIM));
INSERT INTO tabel_mahasiswa VALUES('001','davit coversong','jl.sakti mandraguna no5, bandung','teknik elektro');
INSERT INTO tabel_mahasiswa VALUES('002','diana diana kekasihku','jl.pelabuhan indah no5, sukabumi','teknik informatika');
INSERT INTO tabel_mahasiswa VALUES('003','elang raharaja','jl.kebayoran indah no5, garut','teknik mesin');
INSERT INTO tabel_mahasiswa VALUES('004','frida nuryana ila','jl.kebagusan indah jakarta selatan','teknik fisika');
INSERT INTO tabel_mahasiswa VALUES('005','giska ameliana','jl.blok e kotaintan, sumedang','teknik informatika');
CREATE TABLE tabel_dosen(
NIP varchar(10),
nama_dosen varchar(50),
primary key (NIP)
);
INSERT INTO tabel_dosen VALUES('D001','Drs.Herman jaya aditya');
INSERT INTO tabel_dosen VALUES('D002','Muslimah Aulia SE');
INSERT INTO tabel_dosen VALUES('D003','Ghani Abdul Hakim SPd');
INSERT INTO tabel_dosen VALUES('D004','Moch.Muchtar Lubis SH');
INSERT INTO tabel_dosen VALUES('D005','Hana Christina SE');
CREATE TABLE tabel_mata_kuliah(
id_mata_kuliah varchar (10),
nama_mata_kuliah varchar (30),
SKS int(1),
primary key(id_mata_kuliah)
);
INSERT INTO tabel_mata_kuliah VALUES('MT001','Pengembangan bisnis',3);
INSERT INTO tabel_mata_kuliah VALUES('MT002','Matematika Aljabar',2);
INSERT INTO tabel_mata_kuliah VALUES('MT003','Teknik Elektro',4);
INSERT INTO tabel_mata_kuliah VALUES('MT004','Marketing',2);
INSERT INTO tabel_mata_kuliah VALUES('MT005','E-Commerse',2);
CREATE TABLE tabel_kontrak(
NIM varchar(10),
NIP varchar (10),
id_mata_kuliah varchar(10),
nilai char(1),
primary key (NIM,NIP,id_mata_kuliah),
foreign key(NIM)references tabel_mahasiswa(NIM),
foreign key(NIP)references tabel_dosen(NIP),
foreign key(id_mata_kuliah)references tabel_mata_kuliah(id_mata_kuliah));
INSERT INTO tabel_kontrak VALUES('001','D002','MT003','A');
INSERT INTO tabel_kontrak VALUES('002','D001','MT004','B');
INSERT INTO tabel_kontrak VALUES('003','D001','MT004','A');
INSERT INTO tabel_kontrak VALUES('004','D005','MT005','B');
INSERT INTO tabel_kontrak VALUES('005','D001','MT003','B');
COMMIT;