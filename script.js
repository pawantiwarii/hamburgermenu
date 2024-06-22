const headerContent = document.querySelector('.header-content')
const hamIcon = document.querySelector('.hamburger-icon')
const main = document.querySelector('.main')
const goToTop = document.querySelector('.go-to-top')

const closeIcon = document.querySelector('.close-icon')

hamIcon.addEventListener('click', (e) =>{
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})

main.addEventListener('click', () =>{
    headerContent.classList.remove('menu-open')
})

