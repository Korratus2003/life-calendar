const squaresContainer = document.getElementById("squares-container");

function createSquares(livedWeeks) {
  squaresContainer.innerHTML = "";

  for (let i = 1; i <= 5200; i++) {
    const square = document.createElement("div");

    if (i <= livedWeeks) {
      square.classList.add("square", "lived");
    } else {
      square.classList.add("square", "remaining");
    }

    squaresContainer.appendChild(square);
  }
}

function handleBirthdateChange(event) {
  const birthdate = new Date(event.target.value);
  const currentDate = new Date();
  const totalWeeks = 5200; // 100 years * 52 weeks per year
  const livedWeeks = Math.round((currentDate - birthdate) / (7 * 24 * 60 * 60 * 1000));

  createSquares(livedWeeks);
  document.getElementById("birthdate-form").style.display = "none";
}

document.querySelector("input[type='date']").addEventListener("change", handleBirthdateChange);
