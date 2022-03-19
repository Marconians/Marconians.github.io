const burger = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('nav-link')[0]
const links = document.querySelector(".nav-container .nav-link li a")

 burger.addEventListener('click', () => { 
    navbarLinks.classList.toggle('active');
 });

 const wrapper = document.querySelector('.wrapper');
 const indicators = [...document.querySelectorAll('.indicators button')];
 
 let currentTestimonial = 0; 
 
 indicators.forEach((item, i) => {
     item.addEventListener('click', () => {
         indicators[currentTestimonial].classList.remove('active');
         wrapper.style.marginLeft = `-${100 * i}%`;
         item.classList.add('active');
         currentTestimonial = i;
     })
 })