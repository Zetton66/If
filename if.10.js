let angka1 = 10;
let angka2 = 3;
let operator = "/";

let hasil;

if (operator === "+") {
  hasil = angka1 + angka2;
} else if (operator === "-") {
  hasil = angka1 - angka2;
} else if (operator === "*") {
  hasil = angka1 * angka2;
} else if (operator === "/") {
  if (angka2 !== 0) {
    hasil = angka1 / angka2;
  } else {
    console.log("Error: Pembagian dengan nol tidak diperbolehkan");
    hasil = null;
  }
} else {
  console.log("Operator tidak valid");
  hasil = null;
}

if (hasil !== null) {
  console.log(angka1 + " " + operator + " " + angka2 + " = " + hasil.toFixed(2));
}