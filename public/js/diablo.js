function minimumGold(m, d, k, c) {
  let requiredGold = 0;
  let maxD = d;
  while (m) {
      if (d <= 0) {
          return -1;
      }
      if (d <= k && !(d == k && m == 1)) {
          requiredGold += c;
          d = maxD;
      }
      d -= k;
      m--;
  }

  return requiredGold;
}

const textarea2 = document.getElementById("textTest2");
const button2 = document.getElementById("buttonTest2");
const outputDiv2 = document.getElementById("outputTest2");

button2.addEventListener("click", function () {
  outputDiv2.innerHTML = "";
  const [m, d, k , c] = textarea2.value.split(" ").map(Number);
  if(!(m >= 0 && m <= 1000 && k >= 0 && k <= 1000 && c >= 0 && c <= 1000)){
    alert("0 <= m , k , c <= 1000");
    return;
  }
  if(!(d > 0 && d <= 1000)){
    alert("0 < d <= 1000");
    return;
  }
  
  outputDiv2.innerHTML += `<p>${minimumGold(m, d, k, c)}</p>`;
});