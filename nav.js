const primaryNav = document.querySelector(".navigate");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener('click', () =>{
 const visibility = primaryNav.getAttribute('data-visible')

 if (visibility === "false"){
  primaryNav.setAttribute("data-visible", true);
  navToggle.setAttribute('aria-expanded', true );
 }else if(visibility=== "true"){
  primaryNav.setAttribute("data-visible", false);
   navToggle.setAttribute('aria-expanded', false );
 }


});  