let randomNumber = localStorage.getItem("randomNumber")
  ? parseInt(localStorage.getItem("randomNumber"))
  : Math.floor(Math.random() * 100) + 1;
let attempts = localStorage.getItem("attempts")
  ? parseInt(localStorage.getItem("attempts"))
  : 0;
let isGameOver = false;

document.getElementById("attempts").textContent = attempts;

document.getElementById("check-button").addEventListener("click", () => {
  if (isGameOver) return;

  const guess = parseInt(document.getElementById("guess").value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("result").textContent =
      "Введите число от 1 до 100.";
    return;
  }

  attempts++;
  localStorage.setItem("attempts", attempts);
  document.getElementById("attempts").textContent = attempts;

  if (guess === randomNumber) {
    document.getElementById(
      "result"
    ).textContent = `Congrats! You guessed the number ${randomNumber}.`;
    isGameOver = true;
  } else if (guess < randomNumber) {
    document.getElementById("result").textContent = "Less! Try again.";
  } else {
    document.getElementById("result").textContent = "More! Try again.";
  }
});

document.getElementById("reset-button").addEventListener("click", () => {
  localStorage.removeItem("randomNumber");
  localStorage.removeItem("attempts");
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  isGameOver = false;
  document.getElementById("attempts").textContent = attempts;
  document.getElementById("result").textContent = "";
  document.getElementById("guess").value = "";
});
