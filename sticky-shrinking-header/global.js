

  var logo = document.getElementById("logo");
  var header = document.getElementById("header");

  window.onscroll = shrink_header;

  function shrink_header() {
    if (window.pageYOffset>120) {
    header.style.height = "75px";
    logo.className = "small"
  }
    if (window.pageYOffset<120) {
    header.style.height = "125px";
    logo.className = "large"
  }
}

  