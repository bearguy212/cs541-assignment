document.getElementById("calcBtn").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    const bmi = weight / (height * height);
    document.getElementById("bmi-output").innerText = bmi.toFixed(2);
  } else {
    document.getElementById("bmi-output").innerText = "Invalid input";
  }
});
