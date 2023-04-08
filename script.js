// Pobieranie daty urodzenia od użytkownika
const birthdateInput = document.getElementById("birthdate");
birthdateInput.addEventListener("change", updateSquares);

function updateSquares() {
	const birthdate = new Date(birthdateInput.value);
	const lifespanInWeeks = 100 * 52; // zakładamy, że żyjemy 100 lat, a każdy rok ma 52 tygodnie
	const livedWeeks = Math.floor((Date.now() - birthdate) / (1000 * 60 * 60 * 24 * 7));
	const remainingWeeks = lifespanInWeeks - livedWeeks;

	// Tworzenie kwadratów
	const squaresContainer = document.getElementById("squares-container");
	squaresContainer.innerHTML = "";

	for (let i = 0; i < lifespanInWeeks; i++) {
		const square = document.createElement("div");
		square.classList.add("square");
		if (i < livedWeeks) {
			square.classList.add("lived");
		} else {
			square.classList.add("remaining");
		}
		squaresContainer.appendChild(square);
	}
}
