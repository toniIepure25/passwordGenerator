const genBtn = document.querySelector("#gen-btn");
const passwordEl = document.querySelector(".pass");
const lenghtEl = document.querySelector("#length");
const numbersCB = document.querySelector("#numbers");
const uppercaseCB = document.querySelector("#uppercase");
const lowercaseCB = document.querySelector("#lowercase");
const symbolsCB = document.querySelector("#symbols");
const copyBtn = document.querySelector("#copied");
const generatorEl = document.querySelector(".generator");

let password = "";
let lenght = 0;
let characters = "";

genBtn.addEventListener("click", () => {
  password = "";
  lenght = lenghtEl.value;
  characters = "";

  if (numbersCB.checked) characters += "0123456789";
  if (uppercaseCB.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercaseCB.checked) characters += "abcdefghijklmnopqrstuvwxyz";
  if (symbolsCB.checked) characters += "!~`#$%^&*@.,/?';:]{}[|/--;-_=+";

  getPassword();

  passwordEl.textContent = password;
});

function getPassword() {
  for (let i = 0; i < lenght; ++i) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  console.log(password);
}

copyBtn.addEventListener("click", () => {
  var copyTexterea = document.createElement("textarea");
  copyTexterea.value = passwordEl.textContent;
  generatorEl.appendChild(copyTexterea);
  copyTexterea.select();
  document.execCommand("copy");
  copyTexterea.remove();
  alert("You copied: " + passwordEl.textContent);
});
