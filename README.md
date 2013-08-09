## Blink is back

Now that support for the venerable blink tag has been removed from major browsers it will be seen as cool and the "hipster" thing to have blink tags on your site.  The cool kids are all talking about it on their vintage phones.

So this is how you can use it right away.  Simply add the `blink_is_back.js` library to your site and watch any blink tags magically light up and bring happiness to this world.

    document.addEventListener('DOMContentLoaded', function(){
      setInterval(function() {
        var t = document.getElementsByTagName("blink"), l = t.length;
        while(l--) {
          var v = 'visible', s = t[l].style, s.visibility = s.visibility == v ? "hidden" : v;
        }
      }, 999);
    });
