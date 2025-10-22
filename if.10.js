let a = 0, b = 1;
console.log(a);
console.log(b);

for (let i = 1; i <= 6; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}
