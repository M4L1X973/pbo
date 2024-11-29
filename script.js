// script.js
let daftarBarang = [];

document.getElementById('tambahButton').addEventListener('click', function() {
    const nama = document.getElementById('nama').value;
    const jumlah = parseInt(document.getElementById('jumlah').value);
    const harga = parseFloat(document.getElementById('harga').value);
    
    if (nama && !isNaN(jumlah) && !isNaN(harga)) {
        const barang = { nama, jumlah, harga };
        daftarBarang.push(barang);
        tampilkanBarang();
        clearInputs();
        alert("Barang berhasil ditambahkan!");
    } else {
        alert("Silakan masukkan data yang valid.");
    }
});

function tampilkanBarang() {
    const daftarBarangElement = document.getElementById('daftarBarang');
    daftarBarangElement.innerHTML = '';
    
    daftarBarang.forEach(barang => {
        const li = document.createElement('li');
        li.textContent = `${barang.nama} (${barang.jumlah} buah) - Rp ${barang.harga.toLocaleString()}`;
        daftarBarangElement.appendChild(li);
    });
}

function clearInputs() {
    document.getElementById('nama').value = '';
    document.getElementById('jumlah').value = '';
    document.getElementById('harga').value = '';
}

// Simpan ke file (simulasi)
document.getElementById('simpanButton').addEventListener('click', function() {
    const dataStr = JSON.stringify(daftarBarang);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'daftar_barang.json';
    a.click();
    URL.revokeObjectURL(url);
});

// Baca dari file (simulasi)
document.getElementById('bacaButton').addEventListener('click', function() {