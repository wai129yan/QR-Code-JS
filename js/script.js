const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

// Button submit
const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    // Validate url
    if (url === "") {
        alert("Please enter a URL");
    } else {
        showSpinner();
        // Show spinner for 1 sec
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);
            showScanner();
            // Generate the save button after the qr code image src is ready
            setTimeout(() => {
                // Get save url
                const saveUrl = qr.querySelector("canvas").toDataURL();
                // Create save button
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000);
    }
};

// Generate QR code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
    });
};
// hide  scanner
const showScanner = () => {
    const scanner = document.getElementById("qrCodeContainer");
    scanner.style.display = "block";
};

// Show spinner
const showSpinner = () => {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
};

// Hide spinner
const hideSpinner = () => {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "none";
};

// Clear QR code 
const clearUI = () => {
    qr.innerHTML = "";
};

// Create  QR code as image
const createSave = (saveUrl) => {
    const link = document.createElement("a");
    document.getElementById("generated").appendChild(link);
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);