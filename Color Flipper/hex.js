//value hex
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//BTN
const btn = document.getElementById('btn')
//COLOR
const color = document.querySelector('.color');

// Random number
const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}

btn.addEventListener("click", () => {
    let hexColor = '#';

    //Number between 0 - 5
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    // Display
    color.textContent = hexColor;
    // Display backgroundcolor
    document.body.style.backgroundColor = hexColor;
})

