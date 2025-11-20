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
<<<<<<< HEAD
=======
}

if (hasil !== null) {
  console.log(angka1 + " " + operator + " " + angka2 + " = " + hasil.toFixed(2));
>>>>>>> 8f8995d3fe3a06225210f4a611a81801e02c706f
}

if (hasil !== null) {
  console.log(angka1 + " " + operator + " " + angka2 + " = " + hasil.toFixed(2));
}