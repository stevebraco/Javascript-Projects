const btn = document.getElementById('btn');
const color = document.querySelector('.color')


const getRandomNumberRGB = () => {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}


const colorRGBA = () => {
    return `rgb(${getRandomNumberRGB()}, ${getRandomNumberRGB()}, ${getRandomNumberRGB()})`
}

btn.addEventListener('click', () => {
    const textRgb = colorRGBA()
    document.body.style.backgroundColor = colorRGBA()
    color.textContent = textRgb;
    

})

