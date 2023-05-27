const toTop = document.querySelector('.to-top');

window.addEventListener("scroll",checkHeight)

function checkHeight(){
if (window.scrollY > 20){
    toTop.style.display="flex"
} else{
    toTop.style.display="none"
}

}