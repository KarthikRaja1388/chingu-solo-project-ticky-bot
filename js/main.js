window.addEventListener("scroll", ()=>{
    const scrolled = window.scrollY;
    if(scrolled < 300){
        document.getElementById("btn_back-to-top").style.display= "none";
    }else{
        document.getElementById("btn_back-to-top").style.display = "block";
    }
})

window.addEventListener("scroll", ()=>{
    const scrolled_to = window.scrollY;
    if(scrolled_to >= 600){
        const card1 = document.querySelector('.card-1');
        card1.style.cssText = 'animation: reveal 0.5s ease-in; opacity:1';
        const card2 = document.querySelector('.card-2');
        card2.style.cssText = 'animation: reveal 0.9s ease-in; opacity:1';
        const card3 = document.querySelector('.card-3');
        card3.style.cssText = 'animation: reveal 1.3s ease-in; opacity:1';
    }

});
    
function toTop(){
    document.documentElement.scrollTop = 0; 
}

