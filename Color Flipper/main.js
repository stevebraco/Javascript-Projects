const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    // Random number between 0 - 3
    const randomNumber = getRandomColor();
    
    // Display Backgroundcolor
    document.body.style.backgroundColor = colors[randomNumber];

    // Display text
    color.textContent = colors[randomNumber];
})
// RandomColor
const getRandomColor = () => {
    return Math.floor(Math.random() * colors.length);
}