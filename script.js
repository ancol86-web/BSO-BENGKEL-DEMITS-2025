document.addEventListener("DOMContentLoaded", () => {
  console.log("Halaman Service Gratis BSO Bengkel HMDM ITS 2025 telah dimuat.");

  // Tambahan fitur jika dibutuhkan
  // Contoh: menampilkan alert saat link pendaftaran tersedia
  const formSection = document.querySelector("section:nth-of-type(5) p");
  const alertButton = document.createElement("button");
  alertButton.textContent = "Notifikasi Saat Pendaftaran Dibuka";
  alertButton.style.marginTop = "10px";
  alertButton.style.padding = "8px 12px";
  alertButton.style.backgroundColor = "#007bff";
  alertButton.style.color = "white";
  alertButton.style.border = "none";
  alertButton.style.borderRadius = "5px";
  alertButton.style.cursor = "pointer";

  alertButton.addEventListener("click", () => {
    alert("Pantau terus halaman ini atau Instagram @bengkeldemits untuk info pendaftaran terbaru!");
  });

  formSection.appendChild(alertButton);
});
