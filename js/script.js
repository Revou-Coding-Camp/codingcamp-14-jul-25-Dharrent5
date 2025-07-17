function tampilkanNama() {
  const nama = document.getElementById("namaInput").value;
  document.getElementById("outputNama").innerText = `Hi, ${nama}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("message-form");
  const output = document.getElementById("hasilOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("Nama").value.trim();
    const email = document.getElementById("Email").value.trim();
    const telepon = document.getElementById("Telepon").value.trim();
    const pesan = document.getElementById("Pesan").value.trim();

    if (!nama || !email || !telepon || !pesan) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    if (!email.includes("@")) {
      alert("Format email tidak valid");
      return;
    }

    if (isNaN(telepon)) {
      alert("Nomor telepon harus berupa angka!");
      return;
    }

    output.innerHTML = `
      <h3>Data Terkirim:</h3>
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telepon:</strong> ${telepon}</p>
      <p><strong>Pesan:</strong> ${pesan}</p>
    `;
  });
});
