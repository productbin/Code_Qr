document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-qr");
  const qrDataInput = document.getElementById("qr-data");
  const saveButton = document.getElementById("save-qr");
  const qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 300,
    height: 300,
  });

  generateButton.addEventListener("click", function () {
    const data = qrDataInput.value;
    if (data) {
      qrcode.makeCode(data);
    }
  });

  saveButton.addEventListener("click", function () {
    const data = qrDataInput.value;
    if (data) {
      const qrCodeImage = document.querySelector("#qrcode img");
      if (qrCodeImage) {
        // Create a download link for the QR code image
        const a = document.createElement("a");
        a.href = qrCodeImage.src;
        a.download = "qrcode.png"; // You can set the filename as you like
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  });
});
