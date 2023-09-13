function areBracketsBalanced(s) {
  let stack = [];
  for (let ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")" || ch === "}" || ch === "]") {
      if (!stack.length) {
        return false;
      }
      const lastOpenBracket = stack.pop();
      if (!isMatchingPair(lastOpenBracket, ch)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function isMatchingPair(open, close) {
  return (
    (open === "(" && close === ")") ||
    (open === "{" && close === "}") ||
    (open === "[" && close === "]")
  );
}

const textarea = document.getElementById("textTest1");
const button = document.getElementById("buttonTest1");
const outputDiv = document.getElementById("outputTest1");

button.addEventListener("click", function () {
  outputDiv.innerHTML = "";
  const listValue = textarea.value.split("\n");
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
    if(listValue[i].length > 100000){
      alert(" size of string <= 100000");
      return
    }
  }

  for (let i = 1; i <= numTests; i++) {
    outputDiv.innerHTML += `<p>${
      areBracketsBalanced(listValue[i]) ? "true" : "false"
    }</p>`;
  }
});
