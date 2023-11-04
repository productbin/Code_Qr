document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-qr");
  const qrDataInput = document.getElementById("qr-data");
  const saveButton = document.getElementById("save-qr");

  generateButton.addEventListener("click", function () {
    const data = qrDataInput.value;
    if (data) {
      // Clear the previous QR code if it exists
      const previousQRCode = document.querySelector("#qrcode img");
      if (previousQRCode) {
        previousQRCode.remove();
      }

      // Create a new QR code image
      const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: data,
        width: 300,
        height: 300,
      });

      saveButton.disabled = false; // Enable the "Save" button when a QR code is generated
    } else {
      saveButton.disabled = true; // Disable the "Save" button when there's no data
    }
  });

  saveButton.addEventListener("click", function () {
    const qrCodeImage = document.querySelector("#qrcode img");
    if (!qrCodeImage) {
      // Check if the QR code is empty or not generated
      alert("Please generate a QR code before saving.");
      return;
    }

    const dataURL = qrCodeImage.src;
    const imageBlob = dataURLToBlob(dataURL);

    const url = window.URL.createObjectURL(imageBlob);

    // Create a download link for the QR code image
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.png"; // You can set the filename as you like
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  });

  function dataURLToBlob(dataURL) {
    const parts = dataURL.split(";base64,");
    const contentType = parts[0].replace("data:", "");
    const rawData = window.atob(parts[1]);
    const rawDataLength = rawData.length;
    const bytes = new Uint8Array(rawDataLength);
    for (let i = 0; i < rawDataLength; i++) {
      bytes[i] = rawData.charCodeAt(i);
    }
    return new Blob([bytes], { type: contentType });
  }
});
