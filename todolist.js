const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();

  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button");

  label.textContent = teks + " ";

  // Tombol tandai selesai
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";

  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");

    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });

  // Tombol hapus tugas
  hapus.type = "button";
  hapus.textContent = "Hapus";

  hapus.addEventListener("click", function () {
    item.remove();
    pesanTugas.textContent = "Tugas berhasil dihapus.";
  });

  item.append(label, selesai, hapus);
  daftarTugas.appendChild(item);

  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});
