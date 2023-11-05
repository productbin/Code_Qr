const generateButton = document.getElementById("generate-button");
const downloadButton = document.getElementById("download-button");
const qrCode = new QRCode(document.getElementById("qr-code"), {
  width: 300,
  height: 300,
});

generateButton.addEventListener("click", () => {
  const textInput = document.getElementById("text-input").value;
  qrCode.clear();
  qrCode.makeCode(textInput);
  downloadButton.style.display = "block";
});

downloadButton.addEventListener("click", () => {
  const qrCodeDataUrl = document
    .getElementById("qr-code")
    .getElementsByTagName("img")[0].src;
  downloadButton.href = qrCodeDataUrl;
});
