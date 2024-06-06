var navbar = document.getElementById("navbar");
let count =0;
function dropDown(){
    if(count%2!=0){
        $("nav").removeClass('navsd');
    }
    else{
        $("nav").addClass("navsd");  
        setTimeout(function(){
            $("nav").removeClass('navsd'); 
            count++;           
        },10000);
    }
    count++;
    console.log(count);
}
const myNav = document.getElementById('header');
const element = document.getElementById('one');
window.onscroll = function() {
    console.log(window.scrollY);
    console.log(element.clientHeight);
  if(window.scrollY > 10*element.clientHeight){
    myNav.classList.add('scrolled');
  }else{
    myNav.classList.remove('scrolled');
  }
}