// once hit max length of input feild move to next input feild.

                  // this  middle
function autotab(current,to){
  // if     this.getattribut and
    if (current.getAttribute && 
      // this.value.length is equal to this.getattribute(maxlength)
      current.value.length==current.getAttribute("maxlength")) {
        // middle.focus
        to.focus() 
        }
}
