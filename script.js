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
        const downloadLink = document.createElement("a");
        downloadLink.href = qrCodeImage.src;
        downloadLink.download = "qrcode.png"; // You can set the filename as you like
        downloadLink.style.display = "none";

        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Remove the download link after the download is initiated
        document.body.removeChild(downloadLink);
      }
    }
  });
});
