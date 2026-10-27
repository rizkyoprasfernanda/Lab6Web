# LAPORAN PRAKTIKUM 6 PEMROGRAMAN WEB

Nama : Rizky Opras Fernanda<br>
NIM : 312510101<br>
Kelas : I252A<br>
Program Studi : Teknik Informatika<br>
Mata Kuliah : Pemrograman Web

## Langkah-Langkah Praktikum

### Persiapan Visual Studio Code dan Browser

Pertama, membuka aplikasi Visual Studio Code sebagai text editor dan browser untuk melihat hasil dari halaman HTML.

Kemudian dibuat folder kerja dengan nama Lab6Web

![Screenshot 1]\(media/ss/1.png)

### Membuat Dokumen HTML

Pertama buat index.html , style.css, dan script.js

![Screenshot 2]\(media/ss/2.png)

Hubungkan semua file ke index.html

![Screenshot 3]\(media/ss/3.png)

Hasilnya :

Muncul Judul Latihan DOM dengan sebah paragraph dan sebuah button

![Screenshot 4]\(media/ss/4.png)

### 1. Mengubah teks dengan DOM

Tulis pada script.js

![Screenshot 5]\(media/ss/5.png)

Hasilnya :

Judul berubah dari Latihan DOM menjadi Belajar JavaScript DOM Rizky Opras Fernanda. Dan pesan juga berubah menjdai “Konten berhasul diubah oleh Javascript”.

![Screenshot 6]\(media/ss/6.png)

### 2. Event click

![Screenshot 7]\(media/ss/7.png)

Hasilnya :

Pesan akan berubah menjadi waktu pengeclickan tombol.

![Screenshot 8]\(media/ss/8.png)

### 3. Mengubah kelas dan gaya CSS

Tambahkan html untuk membuat button baru.

![Screenshot 9]\(media/ss/9.png)

Tambahkan CSS dan JS nya:

![Screenshot 10]\(media/ss/10.png)

![Screenshot 11]\(media/ss/11.png)

Hasilnya :

![Screenshot 12]\(media/ss/12.png)

Dan jika Ubah Gaya ditekan maka hasilnya :

Ketika tombol Ubah Gaya diklik, paragraf akan berubah warna, memiliki latar belakang biru muda, garis di sebelah kiri, dan ukuran teks yang lebih besar. Jika tombol diklik lagi, gaya tersebut akan dihilangkan.

![Screenshot 13]\(media/ss/13.png)

add() : menambahkan class.  

remove() : menghapus class.  

toggle() : menambahkan atau menghapus class secara bergantian.

### 4. Event input dan penghitung karakter

Tambahkan html dan javascript nya:

HTML

![Screenshot 14]\(media/ss/14.png)

JAVASCRIPT

![Screenshot 15]\(media/ss/15.png)

Hasilnya :

Muncul input nama jika kita mengetikan nama maka akan otomatis menghitung jumlah karakter yang dimasukan.

![Screenshot 16]\(media/ss/16.png)

![Screenshot 17]\(media/ss/17.png)

### 5. Validasi form pendaftaran

Buat form html :

![Screenshot 18]\(media/ss/18.png)

Tambahkan javascriptnya :

![Screenshot 19]\(media/ss/19.png)

Hasilnya :

Muncul form untuk pendaftaran.

![Screenshot 20]\(media/ss/20.png)

Jika dikosongkan lalu klik daftar maka :

Muncul alert kolom “Nama wajib diisi.”

![Screenshot 21]\(media/ss/21.png)

Jika kolom nama kosong, hasilnya muncul alert “Nama wajib diisi.”

![Screenshot 22]\(media/ss/22.png)

Jika mengisi email yang tidak valid maka akan munucl alert “Masukan email yang valid.”

![Screenshot 23]\(media/ss/23.png)

Jika usia dibawah 17 maka muncuk alert “Usia harus berupa bilangan bulat 17–100.”

![Screenshot 24]\(media/ss/24.png)

Dan jika semua validasi valid maka muncul alert “Validasi berhasil. Form siap diproses.”

![Screenshot 25]\(media/ss/25.png)

### 6. Daftar tugas sederhana (To-do List)

Buat html baru dengan nama todolist.html dengan todolist.js

![Screenshot 26]\(media/ss/26.png)

![Screenshot 27]\(media/ss/27.png)

Hasilnya :

Muncul sebuah form untuk menambahkan tugas

![Screenshot 28]\(media/ss/28.png)

Kita bisa mengisikan tugasnya kedalam input kemudian klik tambah

![Screenshot 29]\(media/ss/29.png)

Ada validasi jika input kosong.

![Screenshot 30]\(media/ss/30.png)

Dan jika klik tandai selesai maka akan tercoret.

![Screenshot 31]\(media/ss/31.png)

## MINI PROJECT

### 1. Membuat index.html

![Screenshot 32]\(media/ss/32.png)

### 2. Membuat CSS

![Screenshot 33]\(media/ss/33.png)

### 3. Membuat Javascriptnya

![Screenshot 34]\(media/ss/34.png)

\- Validasi nama, email, dan pilihan sesi.

Validasi nama :

Jika kosong maka muncul alert : “Nama Wajib diisi”

![Screenshot 35]\(media/ss/35.png)

Validasi email :

![Screenshot 36]\(media/ss/36.png)

Validasi sesi

![Screenshot 37]\(media/ss/37.png)

\- Penghitung karakter atau ringkasan input secara langsung.

  ![Screenshot 38]\(media/ss/38.png)

  ![Screenshot 39]\(media/ss/39.png)

\- Pesan kesalahan dan pesan sukses yang tampil pada halaman.

  ![Screenshot 40]\(media/ss/40.png)

  ![Screenshot 41]\(media/ss/41.png)

\- Tombol reset atau hapus input.

Jika ditekan maka semua input akan menjadi kosong.

![Screenshot 42]\(media/ss/42.png)

\- Gunakan addEventListener() untuk event input, change, click, atau submit.

  ![Screenshot 43]\(media/ss/43.png)

## EKSPERIMEN MANDIRI

### 1. Tambahkan tombol untuk menghapus satu item dari To-do List.

![Screenshot 44]\(media/ss/44.png)

Hasilnya :

![Screenshot 45]\(media/ss/45.png)

Jika menekan hapus maka tugas akan terhapus.

![Screenshot 46]\(media/ss/46.png)

### 2. Ubah validasi agar nama minimal terdiri dari tiga karakter.

![Screenshot 47]\(media/ss/47.png)

Hasilnya :

Jika mengetikan nama dengan 2 huruf maka muncul alert “Nama minimal harus terdiri dari 3 karakter.”

![Screenshot 48]\(media/ss/48.png)

### 3. Tambahkan event change pada dropdown sesi workshop dan tampilkan sesi yang dipilih.

![Screenshot 49]\(media/ss/49.png)

Hasilnya :

![Screenshot 50]\(media/ss/50.png)

Sesi yang dipilih akan muncul di kotak Ringkasan Pendaftaran.

### 4. Buat tombol untuk menyembunyikan dan menampilkan paragraf menggunakan class CSS.

Buat tombol dan paragraph pada html.

![Screenshot 51]\(media/ss/51.png)

Tambahkan CSS dan JSnya

![Screenshot 52]\(media/ss/52.png)

![Screenshot 53]\(media/ss/53.png)

Hasilnya :

Muncul sebuah paragraph dan sebuah button

![Screenshot 54]\(media/ss/54.png)

jika diclick maka paragraf akan terhapus dan jika meneka Tampilkan Paragraf maka paragraph akan muncul kembali.

![Screenshot 55]\(media/ss/55.png)

### 5. Coba pindahkan script tanpa defer ke bagian head. Amati kemungkinan masalah dan jelaskan penyebabnya.

Jika script JavaScript dipindahkan ke bagian \<head> tanpa menggunakan defer, kemungkinan akan terjadi error karena elemen HTML belum selesai dimuat ketika JavaScript dijalankan.

![Screenshot 56]\(media/ss/56.png)

JavaScript yang menggunakan document.getElementById("judul") akan menghasilkan null karena elemen dengan ID judul belum dibaca oleh browser. Akibatnya, ketika JavaScript mencoba mengubah textContent, akan muncul error seperti Cannot set properties of null.

## PERTANYAAN DAN EVALUASI

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (Document Object Model) adalah representasi struktur HTML dalam bentuk objek yang dapat diakses dan diubah menggunakan JavaScript. Manfaatnya adalah untuk mengubah teks, mengatur tampilan, menambahkan elemen, dan membuat halaman web menjadi interaktif.

### 2. Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?

\- getElementById() digunakan untuk memilih satu elemen berdasarkan ID.

\- querySelector() digunakan untuk memilih elemen pertama yang cocok dengan selector CSS.

\- querySelectorAll() digunakan untuk memilih semua elemen yang cocok dengan selector CSS dan menghasilkan NodeList.

### 3. Apa fungsi addEventListener() dan sebutkan tiga contoh event?

addEventListener() berfungsi untuk menjalankan suatu fungsi ketika sebuah event terjadi pada elemen HTML. Tiga contohnya adalah click ketika elemen diklik, input ketika isi input berubah, dan submit ketika form dikirim.

### 4. Mengapa event.preventDefault() digunakan pada event submit form?

event.preventDefault() digunakan untuk mencegah tindakan bawaan browser saat form dikirim, seperti memuat ulang halaman. Dengan demikian, JavaScript dapat memvalidasi data terlebih dahulu dan menampilkan pesan tanpa me-refresh halaman.

### 5. Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?

textContent digunakan untuk membaca atau mengubah teks biasa pada elemen, sedangkan innerHTML digunakan untuk membaca atau mengubah isi HTML, termasuk tag HTML. textContent lebih aman untuk menampilkan input pengguna karena tidak menafsirkan teks sebagai HTML, sedangkan innerHTML berisiko menimbulkan serangan XSS jika digunakan dengan HTML dari sumber yang tidak tepercaya.

### 6. Bagaimana classList.toggle() membantu mengubah tampilan elemen?

classList.toggle() digunakan untuk menambahkan class CSS jika class tersebut belum ada dan menghapusnya jika sudah ada. Contohnya, element.classList.toggle("sembunyi") dapat digunakan untuk menyembunyikan dan menampilkan elemen dengan bantuan CSS display: none.

### 7. Sebutkan minimal tiga skenario pengujian validasi form.

\- Input kosong: Nama tidak diisi, sehingga muncul pesan bahwa nama wajib diisi.

\- Format email salah: Email diisi dengan format yang tidak valid, sehingga muncul pesan kesalahan.

\- Usia di luar batas: Usia diisi kurang dari 17 atau lebih dari 100, sehingga data ditolak.

\- Nama kurang dari tiga karakter: Nama hanya terdiri dari satu atau dua karakter, sehingga muncul pesan bahwa nama minimal tiga karakter.

\- Semua data valid: Nama, email, dan usia diisi dengan benar, sehingga muncul pesan bahwa validasi berhasil.
