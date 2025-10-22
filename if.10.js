let a = 0, b = 1;
console.log(a); // angka pertama
console.log(b); // angka kedua
// Tulis kode for loop di sini untuk 6 angka berikutnya

for (let i = 1; i <= 6; i++) {
  let c = a + b;     // menghitung angka berikutnya (addition)
  console.log(c);     // menampilkan hasil
  a = b;              // geser nilai: a menjadi b
  b = c;              // geser nilai: b menjadi c (angka baru)
}
