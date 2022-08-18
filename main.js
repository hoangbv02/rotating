const menuE= document.querySelectorAll('.menu-item');
const containerE= document.querySelector('.container');
const navE=document.querySelector('.nav')
menuE[0].onclick = function(){
    containerE.classList.add('show');
    navE.classList.add('show');
    this.parentElement.classList.add('show');
}
menuE[1].onclick = function(){
    containerE.classList.remove('show');
    navE.classList.remove('show');
    this.parentElement.classList.remove('show');
}