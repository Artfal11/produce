const  headerBurger = document.querySelector(".header-burger"),
    headerNav = document.querySelector(".header-nav"),
    headerLink = document.querySelector(".header-link"),
    headerLink1 = document.querySelector(".header-link-1"),
    headerLink2 = document.querySelector(".header-link-2"),
    headerLink3 = document.querySelector(".header-link-3"),
    headerLink4 = document.querySelector(".header-link-4"),
    body = document.querySelector("body");

headerBurger.onclick = function() {
    headerBurger.classList.toggle("active");
    headerNav.classList.toggle("active");
    body.classList.toggle("no-scroll");
};

headerLink.onclick = function() {
    headerBurger.classList.remove("active");
    headerNav.classList.remove("active");
    body.classList.remove("no-scroll");
};

headerLink1.onclick = function() {
    headerBurger.classList.remove("active");
    headerNav.classList.remove("active");
    body.classList.remove("no-scroll");
};
headerLink2.onclick = function() {
    headerBurger.classList.remove("active");
    headerNav.classList.remove("active");
    body.classList.remove("no-scroll");
};
headerLink3.onclick = function() {
    headerBurger.classList.remove("active");
    headerNav.classList.remove("active");
    body.classList.remove("no-scroll");
};
headerLink4.onclick = function() {
    headerBurger.classList.remove("active");
    headerNav.classList.remove("active");
    body.classList.remove("no-scroll");
};

let modal = document.querySelector('.popup');
let btn = document.querySelector('.popup-link');
let btn2 = document.querySelector('.popup-link-2');
let btn3 = document.querySelector('.popup-link-3');
let btn4 = document.querySelector('.popup-link-4');
let btn5 = document.querySelector('.popup-link-5');
let span = document.querySelector('.close-popup');

btn.addEventListener("click", function() {
    modal.classList.add("open");
    body.classList.add("no-scroll");
});
btn2.addEventListener("click", function() {
    modal.classList.add("open");
    body.classList.add("no-scroll");
});
btn3.addEventListener("click", function() {
    modal.classList.add("open");
    body.classList.add("no-scroll");
});
btn4.addEventListener("click", function() {
    modal.classList.add("open");
    body.classList.add("no-scroll");
});
btn5.addEventListener("click", function() {
    modal.classList.add("open");
    body.classList.add("no-scroll");
});

span.addEventListener("click", function() {
    modal.classList.remove("open");
    body.classList.remove("no-scroll");
});
