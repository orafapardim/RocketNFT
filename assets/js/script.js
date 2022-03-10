const btnBurger = document.getElementById('btnBurger')

btnBurger.addEventListener('click', toggleMenu)

function toggleMenu() {
  const navCollapse = document.getElementById('navCollapse')
  const menu = document.getElementById('navMenu')

  navCollapse.classList.toggle('active')
  menu.classList.toggle('active')
  btnBurger.classList.toggle('active')
}

const menuLinksInternals = document.querySelectorAll('a[href^="#"]')
console.log(menuLinksInternals)

menuLinksInternals.forEach(item => {
  item.addEventListener('click', scrollToIdClick)
})

function scrollToIdClick(event) {
  event.preventDefault()

  const idDestino = event.target.getAttribute('href')
  const to = document.querySelector(idDestino).offsetTop

  window.scrollTo({
    top: to,
    behavior: "smooth"
  })
}