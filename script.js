document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-qr");
  const qrDataInput = document.getElementById("qr-data");
  const qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 128,
    height: 128,
  });

  generateButton.addEventListener("click", function () {
    const data = qrDataInput.value;
    if (data) {
      qrcode.makeCode(data);
    }
  });
});
