

// var test = document.getElementById("tab1").className += ' hide';


document.getElementById("tab1").onclick = hideTabs("tab1");

document.getElementById("tab2").onclick = hideTabs;

document.getElementById("tab3").onclick = hideTabs;

function hideTabs(selected){
  if (selected === "tab1"){
    document.getElementById("tab2").className += ' hide';
    document.getElementById("tab3").className += ' hide';
    //hide tab2 and tab3
  } else if (selected === "tab2"){
    document.getElementById("tab1").className += ' hide';
    document.getElementById("tab3").className += ' hide';
    //hide tab1 and tab3
  } else {
    document.getElementById("tab1").className += ' hide';
    document.getElementById("tab2").className += ' hide';
    //hide tab1 and tab2
  }
}
