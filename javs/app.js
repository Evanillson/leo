
//scroll//

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
        top: to - 300,
        behavior: "smooth"
    });
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











