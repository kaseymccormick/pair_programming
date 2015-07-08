// if (this.value.length == this.maxLength) {
//   var $next = $(this).next('.inputs');
//   if ($next.length)
//       $(this).next('.inputs').focus();
//   else
//       $(this).blur();
// }

// (".inputs").keyup(function () {
//        if (this.value.length == this.maxLength) {
//          (this).next('.inputs').focus();
//        }
//  });

// once hit max length of input feild move to next input feild.


function autotab(current,to){
    if (current.getAttribute && 
      current.value.length==current.getAttribute("maxlength")) {
        to.focus() 
        }
}
