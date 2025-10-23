let pola = ""; 

for (let i = 1; i <= 5; i++) {          // loop baris
  for (let j = 1; j <= i; j++) {        // loop kolom
    pola += "*";                        // tambahkan bintang
  }
  pola += "\n";                         // pindah ke baris berikutnya
}

console.log(pola);
