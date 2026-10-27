document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formWorkshop");
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const sesi = document.getElementById("sesi");
  const tombolReset = document.getElementById("tombolReset");

  const hitungKarakter = document.getElementById("hitungKarakter");
  const pesanError = document.getElementById("pesanError");
  const pesanSukses = document.getElementById("pesanSukses");

  const hasilNama = document.getElementById("hasilNama");
  const hasilEmail = document.getElementById("hasilEmail");
  const hasilSesi = document.getElementById("hasilSesi");

  // Menghitung karakter nama
  nama.addEventListener("input", function () {
    hitungKarakter.textContent = nama.value.length + " karakter";
    hasilNama.textContent = nama.value.trim() || "-";
    pesanError.textContent = "";
    pesanSukses.textContent = "";
  });

  // Memperbarui ringkasan email
  email.addEventListener("input", function () {
    hasilEmail.textContent = email.value.trim() || "-";
    pesanError.textContent = "";
    pesanSukses.textContent = "";
  });

  // Memperbarui ringkasan sesi
  sesi.addEventListener("change", function () {
    hasilSesi.textContent = sesi.value || "-";
    pesanError.textContent = "";
    pesanSukses.textContent = "";
  });

  // Validasi form saat tombol daftar ditekan
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    pesanError.textContent = "";
    pesanSukses.textContent = "";

    if (namaValue === "") {
      pesanError.textContent = "Nama wajib diisi.";
      nama.focus();
    } else if (!emailValid) {
      pesanError.textContent = "Masukkan alamat email yang valid.";
      email.focus();
    } else if (sesi.value === "") {
      pesanError.textContent = "Silakan pilih sesi workshop.";
      sesi.focus();
    } else {
      pesanSukses.textContent =
        "Pendaftaran berhasil! Silakan periksa ringkasan Anda.";
    }
  });

  // Menghapus semua input
  tombolReset.addEventListener("click", function () {
    form.reset();

    hitungKarakter.textContent = "0 karakter";
    pesanError.textContent = "";
    pesanSukses.textContent = "";

    hasilNama.textContent = "-";
    hasilEmail.textContent = "-";
    hasilSesi.textContent = "-";

    nama.focus();
  });
});
