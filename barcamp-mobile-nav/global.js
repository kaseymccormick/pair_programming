function showMenu(){
   document.getElementById("menu").style.top = 0 + "px";   
}

function hideMenu(){
  document.getElementById("menu").style.top = "-" + 300 + "px";  
}

hideMenu();

document.getElementById("adminicon").onclick = showMenu;

document.getElementById("adminicon").ondblclick = hideMenu;


// /// how do i get this to work....
// $("button").click(function(){
//     $("p").toggleClass("main");
// });
//
// //syntax
// $(selector).toggleClass(classname,function(index,currentclass),switch)