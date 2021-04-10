const div = document.querySelector('div');
const icon = document.querySelector('.icon')

icon.addEventListener('click', () => {
    div.classList.toggle('active')
})