// not sure what using for at the moment, hold
// var tablinks = ["tab1", "tab2 ", "tab3"];
// var contentDivs = ["you're on tab1", "tab two!","tab four, just kidding"]

function showTab(){
  //show div partner to the tab selected and hide the other two//
  when i click on tab 1 add class or id 'hidden' to tab content div's' 2 and 3
}

function showTab() {
  var selectedId = getHash( this.getAttribute('href') );

  // Highlight the selected tab, and dim all others.
  // Also show the selected content div, and hide all others.
  for ( var id in contentDivs ) {
    if ( id == selectedId ) {
      tabLinks[id].className = 'selected';
      contentDivs[id].className = 'tabContent';
    } else {
      tabLinks[id].className = '';
      contentDivs[id].className = 'tabContent hide';
    }
  }

  // Stop the browser following the link
  return false;
}


document.getElementById("tab1").onclick = showTab

document.getElementById("tab2").onclick = showTab

document.getElementById("tab3").onclick = showTab

function all_theStuff(id){
document.getElementsByClassName("tabContent");
document.getElementById("id");
}