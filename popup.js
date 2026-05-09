document.getElementById('generate').addEventListener('click', () => {
  const lengthInput = document.getElementById('length');
  
  // Rule: Automatically set to 150 if input is higher
  if (parseInt(lengthInput.value) > 150) {
    lengthInput.value = 150;
  }
  
  const length = +lengthInput.value;
  const hasUpper = document.getElementById('upper').checked;
  const hasLower = document.getElementById('lower').checked;
  const hasNumber = document.getElementById('numbers').checked;
  const hasSymbol = document.getElementById('symbols').checked;

  let charPool = "";
  let types = 0;
  if (hasUpper) { charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; types++; }
  if (hasLower) { charPool += "abcdefghijklmnopqrstuvwxyz"; types++; }
  if (hasNumber) { charPool += "0123456789"; types++; }
  if (hasSymbol) { charPool += "!@#$%^&*()_+~`|}{[]:;?><,./-="; types++; }

  const resultDiv = document.getElementById('result');
  if (charPool === "") { resultDiv.textContent = "SELECT_AN_OPTION"; return; }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charPool[Math.floor(Math.random() * charPool.length)];
  }

  resultDiv.textContent = password;
  navigator.clipboard.writeText(password);
  
  updateStrength(length, types);
  
  const btn = document.getElementById('generate');
  btn.textContent = "COPIED TO CLIPBOARD";
  setTimeout(() => { btn.textContent = "Initialize"; }, 1500);
});

function updateStrength(len, types) {
  const bar = document.getElementById('strength-bar');
  const label = document.getElementById('strength-label');
  let score = (len * 2) + (types * 10);
  
  if (score < 40) {
    bar.style.width = "25%"; bar.style.background = "#ff4444"; label.textContent = "WEAK";
  } else if (score < 60) {
    bar.style.width = "50%"; bar.style.background = "#ffbb33"; label.textContent = "DECENT";
  } else if (score < 85) {
    bar.style.width = "75%"; bar.style.background = "#00C851"; label.textContent = "STRONG";
  } else {
    bar.style.width = "100%"; bar.style.background = "#00f2ff"; label.textContent = "MILITARY GRADE";
  }
}