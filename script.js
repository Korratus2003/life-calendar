const dateInput = document.getElementById("date-input");
const squaresContainer = document.querySelector(".squares-container");

dateInput.addEventListener("change", () => {
    const birthDate = new Date(dateInput.value);
    const now = new Date();

    const diffInMilliseconds = now.getTime() - birthDate.getTime();
    const diffInWeeks = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7));
    const totalWeeks = Math.floor(100 * 52.143);

    dateInput.style.display = "none";

    for (let i = 0; i < totalWeeks; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        if (i < diffInWeeks) {
            square.classList.add("filled");
        } else {
            square.classList.add("empty");
        }
        squaresContainer.appendChild(square);
    }
});
