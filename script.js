const generateButton = document.getElementById("generate-button");
const downloadButton = document.getElementById("download-button");
const qrCode = new QRCode(document.getElementById("qr-code"), {
  width: 300,
  height: 300,
});

const textInput = document.getElementById("text-input");

textInput.addEventListener("input", () => {
  if (textInput.value.trim() !== "") {
    generateButton.disabled = false;
  } else {
    generateButton.disabled = true;
  }
});

generateButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  qrCode.clear();
  qrCode.makeCode(text);
  downloadButton.style.display = "block";
});

downloadButton.addEventListener("click", () => {
  const qrCodeDataUrl = document
    .getElementById("qr-code")
    .getElementsByTagName("img")[0].src;
  downloadButton.href = qrCodeDataUrl;
});
