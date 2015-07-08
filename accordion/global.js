function showSection1(){
  document.getElementById("c2").className = ' hide';
  document.getElementById("c3").className = ' hide';
  document.getElementById("c4").className = ' hide';
  document.getElementById("c1").className = ' visible';
}

function showSection2(){
  document.getElementById("c1").className = ' hide';
  document.getElementById("c3").className = ' hide';
  document.getElementById("c4").className = ' hide';
  document.getElementById("c2").className = ' visible';
}

function showSection3(){
  document.getElementById("c1").className = ' hide';
  document.getElementById("c2").className = ' hide';
  document.getElementById("c4").className = ' hide';
  document.getElementById("c3").className = ' visible';
}

function showSection4(){
  document.getElementById("c1").className = ' hide';
  document.getElementById("c2").className = ' hide';
  document.getElementById("c3").className = ' hide';
  document.getElementById("c4").className = ' visible';
}

function hideAll(){
  document.getElementById("c1").className = ' hide';
  document.getElementById("c2").className = ' hide';
  document.getElementById("c3").className = ' hide';
  document.getElementById("c4").className = ' hide';
}

hideAll();

document.getElementById("t1").onclick = showSection1;

document.getElementById("t2").onclick = showSection2;

document.getElementById("t3").onclick = showSection3;

document.getElementById("t4").onclick = showSection4;