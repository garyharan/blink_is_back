document.addEventListener('DOMContentLoaded', function(){
  setInterval(function() {
    var t = document.getElementsByTagName("blink"), l = t.length;
    while(l--) {
      v = 'visible'; s = t[l].style, s.visibility = s.visibility == v ? "hidden" : v;
    }
  }, 999);
});
