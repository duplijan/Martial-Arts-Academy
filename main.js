const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');
const topOfNav = nav.offsetTop;
const toggle = document.querySelector('.toggle');

function fixNav(){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else if(window.scrollY <= topOfNav){
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
}

function openNav(){
  navbar.classList.toggle('active');
}
toggle.addEventListener('click', openNav);
window.addEventListener('scroll', fixNav);
