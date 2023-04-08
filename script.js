const squaresContainer = document.getElementById('squares-container');
const birthdateInput = document.getElementById('birthdate');
birthdateInput.addEventListener('change', () => {
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();
    const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7;
    const totalWeeks = 100 * 52;
    const weeksLived = Math.floor((currentDate - birthdate) / millisecondsInWeek);
    squaresContainer.innerHTML = '';
    for (let i = 0; i < totalWeeks; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (i < weeksLived) {
            square.classList.add('filled');
        } else {
            square.classList.add('empty');
        }
        squaresContainer.appendChild(square);
    }
});
