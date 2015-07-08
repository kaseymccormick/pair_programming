function showMenu(){
   document.getElementById("menu").style.top = 0 + "px";   
}

function hideMenu(){
  document.getElementById("menu").style.top = -300 + "px";  
}

document.getElementById("hamburger").onClick = showMenu

document.getElementById("hamburger").ondblclick = hideMenu