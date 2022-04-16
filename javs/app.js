
//scroll navegation//

const menuItems = document.querySelectorAll('.nav-links [href^="#"]');
console.log(menuItems);

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id) .offsetTop;



    window.scroll( {
        top: to - 200,
        behavior: "smooth"
    });
}



// scroll header//

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.backgroundColor = "white";
        document.getElementById("menu").style.padding = "0px"


        document.getElementById("top-header").style.backgroundColor = "#f48038"
        document.getElementById("top-header").style.border = "none"

    

    } else {
        document.getElementById("header").style.backgroundColor = "";
        document.getElementById("menu").style.padding = ""
    


        document.getElementById("top-header").style.backgroundColor = ""
        document.getElementById("top-header").style.border = ""

        
    }
}



// nav menu hamburguer//

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    //Fazendo aparecer os itens

    const navLinks = document.querySelectorAll('.nav-links li');
    //Fazendo o clique do menu funcionar
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animações links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navlinkFade .2s ease forwards ${index / 7 + 1.5}s`
            }
        });
        //Transformando em X

        burger.classList.toggle('toggle');
    });
}

navSlide();












