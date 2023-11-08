// JavaScript Code
const generateButton = document.getElementById("generate-button");
const downloadButton = document.getElementById("download-button");
const inputField = document.getElementById("text-input");
const inputWarning = document.getElementById("input-warning");

const qrCode = new QRCode(document.getElementById("qr-code"), {
  width: 300,
  height: 300,
});

generateButton.addEventListener("click", () => {
  const textInput = inputField.value;

  if (textInput.length < 15) {
    // Minimum length validation
    inputWarning.textContent = "Invalid input"; // Display warning
    return;
  } else {
    inputWarning.textContent = ""; // Clear any previous warning
  }

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
