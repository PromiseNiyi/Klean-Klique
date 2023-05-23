const primaryNav = document.querySelector(".navigate");
const primNav = document.querySelector(".nav-togglecancel");

const navToggle = document.querySelector(".nav-toggle");
const navToggletwo = document.querySelector(".nav-togglecancel");
const bodyCancel =document.querySelector("Section")




navToggle.addEventListener('click', () =>{
 const visibility = primaryNav.getAttribute('data-visible')
 

 if (visibility === "false"){
  primaryNav.setAttribute("data-visible", true);
  navToggle.setAttribute('aria-expanded', true );
  primNav.setAttribute("data-visible", true);

 }else if(visibility=== "true"){
  primaryNav.setAttribute("data-visible", false);
   navToggle.setAttribute('aria-expanded', false );
   primNav.setAttribute("data-visible", false);
 }


});  

navToggletwo.addEventListener('click', () =>{
  const visibility = primaryNav.getAttribute('data-visible')
  
 
  if (visibility === "false"){
   primaryNav.setAttribute("data-visible", true);
   primNav.setAttribute("data-visible", true);
   
 
  }else if(visibility=== "true"){
   primaryNav.setAttribute("data-visible", false);
   primNav.setAttribute("data-visible", false);
   
  }
 
 
 });  


 bodyCancel.addEventListener('click', () =>{
  const visibility = primaryNav.getAttribute('data-visible')
  
 
  if (visibility === "true"){
   primaryNav.setAttribute("data-visible", false);
   primNav.setAttribute("data-visible", false);
   
 
  }else if(visibility=== "true"){
   primaryNav.setAttribute("data-visible", false);
   primNav.setAttribute("data-visible", false);
   
  }
 
 
 });  

