// ======== OPEN AND CLOSE MENU ========
const navMenu = document.querySelector('#nav-menu')
const navClose = document.querySelector('#nav-close')
const navToggle = document.querySelector('#nav-toggle')

// OPEN MENU
const openMenu = () => {
   navMenu.classList.add('show-menu')
}

if (navMenu) {
   navToggle.addEventListener('click', openMenu)
}

// CLOSE MENU
const closeMenu = () => {
   navMenu.classList.remove('show-menu')
}

if (navClose) {
   navClose.addEventListener('click', closeMenu)
}

// ======== CLOSE MENU WHEN CLICK ON LINKS ========
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.querySelector('#nav-menu')

   navMenu.classList.remove('show-menu')
}

navLink.forEach(link => {
   link.addEventListener('click', linkAction)
})











