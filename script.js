let menu=document.querySelector("#mleft")
menu.addEventListener('click',()=>{
    hambPage=document.querySelector('#hamb');
    hambPage.style.left=0+'vw'
    
document.addEventListener("scroll",(e)=>{
    hambPage.style.left=-100+'vw'
    hambPage.style.transition='all 0.1s ease-in-out'
 })
})

let closeMenu=document.querySelector('#cross')
closeMenu.addEventListener('click',()=>{
    hambPage=document.querySelector('#hamb')
    hambPage.style.left=-100+'vw'
})



var video = document.getElementById('player');
video.addEventListener('click',function(){
    if(video.paused){
        video().play();
    }else{
        video.pause();
    }
},false);


document.addEventListener("contextmenu",(e)=>{
e.preventDefault();
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true, 
smartphone: {
       smooth: true
   }
});

