document.addEventListener('DOMContentLoaded', function(){
  setInterval(function() {
    var t = document.getElementsByTagName("blink"), l = t.length;
    while(l--) {
      var v = 'visible', s = t[l].style, s.visibility = s.visibility == v ? "hidden" : v;
    }
  }, 999);
});
