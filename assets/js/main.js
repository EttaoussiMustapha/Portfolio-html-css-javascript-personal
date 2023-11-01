/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* MENU SHOW */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* MENU HIDDEN */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* SHADOW HEADER */
const shadowHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    window.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

/* EMAIL JS */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Add this line for debugging

    emailjs
        emailjs.sendForm('service_0o0q01s', 'template_jxgj0tf', '#contact-form', 'ROedMj_c8MXgtgJJg')
        .then(
            () => {
                contactMessage.textContent = 'Message sent successfully ✅';
                console.log("Email sent successfully"); // Add this line for debugging
                contactForm.reset(); // Reset the form
            },
            (error) => {
                contactMessage.textContent = 'Message not sent (service error) ❌: ' ;
                console.error("Email not sent:", error);
            }
        );
}

contactForm.addEventListener('submit', sendEmail);
 

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is greater than 350 viewport height, add the scroll-header class to the header tag 
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrolly

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop= current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link') 
        }
})
}
window.addEventListener('scroll',scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classlist.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](darkTheme)
}

//Activate/deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
// Add or remove the dark/ icon theme
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
//We save the theme and the current icon that the user chose
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})            