// Daftar warna yang diizinkan
const allowedColors = ["black", "white", "gray", "blue", "gold"];

// Fungsi untuk memilih warna secara acak dari daftar
function getRandomColorFromList() {
    const randomIndex = Math.floor(Math.random() * allowedColors.length);
    return allowedColors[randomIndex];
}

// Mengubah warna latar belakang halaman secara acak dari daftar warna
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColorFromList();
}

// Memanggil fungsi saat halaman dimuat
window.onload = function() {
    changeBackgroundColor();
};
