function combinations(k, n) {
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;
  return combinations(k - 1, n - 1) + combinations(k, n - 1);
}

const textarea3 = document.getElementById("textTest3");
const button3 = document.getElementById("buttonTest3");
const outputDiv3 = document.getElementById("outputTest3");

button3.addEventListener("click", function () {
  outputDiv3.innerHTML = "";
  const listValue = textarea3.value.split("\n");
  const numTests = parseInt(listValue[0]);

  if(numTests <= 0 ||numTests > 100) {
    alert("0 < N <= 100");
    return;
  }

  if(numTests != listValue.length - 1) {
    alert("Số lượng test khác so với giá trị nhập")
    return
  }

  for(let i = 1; i <= numTests; i++) {
    const [x, y] = listValue[i].split(" ").map(Number);
    if(!(x >= 0 && y >= 0 && x <= 10 && y <= 10)){
      alert("0 <= x , y <= 10")
      return
    }
  }

  for (let i = 1; i <= numTests; i++) {
    const [x, y] = listValue[i].split(" ").map(Number);
    const sum = x + y;
    outputDiv3.innerHTML += `<p>${combinations(x, sum)}</p>`;
  }
});
