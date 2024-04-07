
let dino=document.querySelector("#dino")
let building =document.querySelector("#building")
let tree =document.querySelector("#tree")
let GameScreen =document.querySelector("#screen")


setInterval(() => {
let DinoPosition=parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
let TreePosition=parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
let BuildingPosition=parseInt(window.getComputedStyle(building).getPropertyValue("left"));

console.log(DinoPosition)

if(DinoPosition==(TreePosition-25)){
  dino.style.bottom=`${60}%`
  setTimeout(()=>{
    dino.style.bottom=`${10}%`
  },1000/2)
}

if(DinoPosition==(BuildingPosition-10)){
  dino.style.bottom=`${60}%`
  setTimeout(()=>{
    dino.style.bottom=`${10}%`
  },1000/3)
}


}, 0);