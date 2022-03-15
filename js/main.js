const sMenu = document.getElementById('menu_icon');
const menu = document.getElementById('show-menu');
const navigation = document.getElementsByClassName('nav');

// activate and deactivate menu button
sMenu.addEventListener('click', ()=> {
    menu.classList.toggle('menu_active')
})

// function caller
window.onscroll = function() {scrollFunction()};
// function that will be triggered when whindow is scrolled
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    menu.classList.add('menu--scrolled')
  } else {
    menu.classList.remove('menu--scrolled')
  }
} 


for(let i = 0; i < navigation.length; i++){
    navigation[i].addEventListener('click', () => {
    menu.classList.remove('menu_active')
    })
}