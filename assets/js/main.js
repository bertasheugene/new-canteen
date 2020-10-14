const burger = document.querySelector('.burger');
const menu = document.querySelector('.navigation');
const closeMenuButton = document.querySelector('.close');
const submenu = document.querySelectorAll('.submenu');
const navigationArrow = document.querySelectorAll('.navigation__arrow');

burger.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
for(let i = 0; i<navigationArrow.length; i++){
    navigationArrow[i].addEventListener('click',openSubMenu);   
}


function openMenu(){
    menu.style.display = 'block';
    burger.style.display = 'none';
    closeMenuButton.style.display = 'block'
}

function closeMenu(){
    menu.style.display = 'none';
    burger.style.display = 'block';
    closeMenuButton.style.display = 'none'
}

function openSubMenu(){
    for(let i = 0; i < submenu.length; i++){
        submenu[i].classList.remove('display');
    }
    if(this.parentElement.nextElementSibling.classList.contains('display')){
        this.parentElement.nextElementSibling.classList.remove('display');
    } else {
        this.parentElement.nextElementSibling.classList.add('display');
    }
    
}