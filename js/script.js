let sisi = document.getElementById("sisi");
let hitung = document.getElementById("hitung");
let output = document.getElementById("output");
function CalculateLuas() {
  let s = sisi.value;
  let t = s * s;
  output.innerHTML = `Luas Persegi adalah ${t}`;
}

let side = document.getElementById("side");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");
function CalculateKeliling() {
  let e = side.value;
  let k = 4 * e;
  result.innerHTML = `Keliling Persegi adalah ${k}`;
}
