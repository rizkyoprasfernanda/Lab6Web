// script.js
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM Rizky Opras Fernanda";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

//event click
const tombol = document.getElementById("tombolAksi");
tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

//mengubah css
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

//Event input dan penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

//form pendaftaran

const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);

  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama.length < 3) {
    pesanForm.textContent = "Nama minimal harus terdiri dari 3 karakter.";
  } else if (!polaEmail.test(email)) {
    pesanForm.textContent = "Masukkan email yang valid.";
  } else if (
    usiaInput === "" ||
    !Number.isInteger(usia) ||
    usia < 17 ||
    usia > 100
  ) {
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
  } else {
    pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    form.reset();
  }
});

// sembunyikan paragraf

const paragrafToggle = document.getElementById("paragrafToggle");
const tombolToggle = document.getElementById("tombolToggle");

tombolToggle.addEventListener("click", function () {
  paragrafToggle.classList.toggle("sembunyi");

  if (paragrafToggle.classList.contains("sembunyi")) {
    tombolToggle.textContent = "Tampilkan Paragraf";
  } else {
    tombolToggle.textContent = "Sembunyikan Paragraf";
  }
});
