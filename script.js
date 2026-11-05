function hitungVolume(sisi) {
    return sisi * sisi * sisi;
}

let volume1 = hitungVolume(4);
let volume2 = hitungVolume(6);

console.log("Volume kubus dengan sisi 4 adalah: " + volume1);
console.log("Volume kubus dengan sisi 6 adalah: " + volume2);

document.getElementById("hasil").innerHTML = `
<p>Volume kubus dengan sisi 4 adalah: ${volume1}</p>
<p>Volume kubus dengan sisi 6 adalah: ${volume2}</p>
`;