
//Navigation Animations
let overlayMenu = document.getElementById('overlay-menu');
let overlayAboutMe = document.getElementById('overlay-about-me');
let overlaySalon= document.getElementById('overlay-salon');
let overlayTopiary= document.getElementById('overlay-topiary');
let overlayContact = document.getElementById('contact-page');
let contactForm = document.getElementById('contact-form');
const contactFormCopy = document.getElementById('contact-form').innerHTML;

document.getElementById('open-menu').addEventListener('click', function () {
    overlayMenu.classList.remove('exit-menu');
    overlayMenu.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function () {
    overlayMenu.classList.add('exit-menu');
    overlayMenu.classList.remove('show-menu');

});

document.getElementById('open-about-me').addEventListener('click', function () {
    overlayAboutMe.classList.remove('exit-content');
    overlayAboutMe.classList.add('show-content');
    console.log("opened");
});

document.getElementById('close-about-me').addEventListener('click', function () {
    overlayAboutMe.classList.add('exit-content');
    overlayAboutMe.classList.remove('show-content');

});

document.getElementById('open-salon').addEventListener('click', function () {
    overlaySalon.classList.remove('exit-content');
    overlaySalon.classList.add('show-content');
});

document.getElementById('close-salon').addEventListener('click', function () {
    overlaySalon.classList.add('exit-content');
    overlaySalon.classList.remove('show-content');

});

document.getElementById('open-topiary').addEventListener('click', function () {
    overlayTopiary.classList.remove('exit-content');
    overlayTopiary.classList.add('show-content');
    console.log("opened");
});

document.getElementById('close-topiary').addEventListener('click', function () {
    overlayTopiary.classList.add('exit-content');
    overlayTopiary.classList.remove('show-content');

});

document.getElementById('open-contact').addEventListener('click', function () {
    overlayContact.classList.remove('exit-content');
    overlayContact.classList.add('show-content');
    console.log("opened");
});



let form = document.querySelector("form");
form.addEventListener("submit", 
event => {
    event.preventDefault();
});

document.getElementById('submit-contact').addEventListener('click', function () {

    const placeForResults = document.getElementById("results")

    new URLSearchParams(window.location.search).forEach((value, name) => {
        placeForResults.append(`${name} : ${value}`)
        placeForResults.append(document.createElement("br"))
    })

    contactForm.innerHTML = 
    '<h1>Thank you.<br>I look forward to working with you!</h1>';
    contactForm.classList.add('thank-you');

});

document.getElementById('close-contact').addEventListener('click', function () {
    overlayContact.classList.add('exit-content');
    overlayContact.classList.remove('show-content');

});