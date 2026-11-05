
function hitung(operator) {

    // Mengambil nilai input
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;

    let tempatHasil = document.getElementById("hasil");

    // Memeriksa input kosong
    if (angka1 === "" || angka2 === "") {
        tempatHasil.textContent = "Isi kedua angka!";
        return;
    }

    angka1 = Number(angka1);
    angka2 = Number(angka2);

    let hasil;

    // Operasi matematika
    switch (operator) {

        case "+":
            hasil = angka1 + angka2;
            break;

        case "-":
            hasil = angka1 - angka2;
            break;

        case "*":
            hasil = angka1 * angka2;
            break;

        case "/":
            if (angka2 === 0) {
                tempatHasil.textContent =
                    "Tidak bisa dibagi nol!";
                return;
            }

            hasil = angka1 / angka2;
            break;
    }

    // Menampilkan hasil
    tempatHasil.textContent = hasil;
}


// Fungsi reset
function resetKalkulator() {

    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";

    document.getElementById("hasil").textContent = "0";
}
