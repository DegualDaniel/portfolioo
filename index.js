const slider = ()=>{

    let hamburger = document.querySelector('.menu');
    let navi = document.querySelector('.navbar')
    hamburger.addEventListener('click',()=>{ 
        navi.classList.toggle("nav-active")


               //BURGER ANIMATION 
               hamburger.classList.toggle("toggle")
    })
    
    window.onscroll = () => {
        navi.classList.remove("nav-active")
        hamburger.classList.remove("toggle")
    }
}
slider()
// ACTIVE NAV

 const divs = document.querySelectorAll('.act');
//  const link = document.querySelectorAll('.navi a')
 divs.forEach(div => {
    div.addEventListener('click',() => {

        divs.forEach(div => div.classList.remove('active'));

        div.classList.add('active');
        if(window.matchMedia("(max-width:900px)").matches){
            divs.forEach(div => div.classList.remove('active'));
        }else{
            div.classList.add('active');
        }
    })
 })






























































