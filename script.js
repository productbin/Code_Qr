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
    const imageUrl = dataURL;

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        // Create a download link for the QR code image
        const a = document.createElement("a");
        a.href = url;
        a.download = "qr-code.png"; // You can set the filename as you like
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  });
});
