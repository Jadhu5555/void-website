document.getElementById("year").textContent = new Date().getFullYear();

// Keep the download URL in one place. Place the current release at:
// public/downloads/void.apk
const apkPath = "/downloads/void.apk";
const downloadLink = document.getElementById("download-link");
downloadLink.href = apkPath;
