// Membuat tombol ubah background
let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";

btnBackground.onclick = function() {
    document.body.style.backgroundColor = "#e8f4fc";
};

// Membuat tombol ubah warna teks
let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";

btnTextColor.onclick = function() {
    document.querySelectorAll("h2, p").forEach(function(teks) {
        teks.style.color = "#0f79e3";
    });
};

// Membuat tombol perbesar font
let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";

btnIncreaseFont.onclick = function() {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 1) + "px";
};

// Membuat tombol perkecil font
let btnDecreaseFont = document.createElement("button");
btnDecreaseFont.textContent = "Perkecil Font";

btnDecreaseFont.onclick = function() {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize - 1) + "px";
};

// Menambahkan tombol ke HTML
let outputDiv = document.getElementById("output3");

outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);
outputDiv.appendChild(btnDecreaseFont);