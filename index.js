let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let str = "";
let arr = Array.from(buttons);

arr.map((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      str = eval(str);
      display.value = str;
    } else if (e.target.innerText == "DEL") {
      str = str.substring(0, str.length - 1);
      display.value=str
    } else if (e.target.innerText == "AC") {
      str = "";
      display.value = str;
    } else {
      str += e.target.innerText;
      display.value = str;
    }
  });
});
