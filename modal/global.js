function hideModal(){
  document.getElementById("modal").className = 'hide';
}

function showModal(){
  document.getElementById("modal").className = 'visible';
}

hideModal();

document.getElementById("button").onclick = showModal;
document.getElementById("close").onclick = hideModal;


