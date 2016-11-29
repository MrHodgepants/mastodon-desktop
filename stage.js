(function() {
  var gui = require('nw.gui');
  var iframe = document.querySelector('iframe');
  var win = gui.Window.get();
    win.on('new-win-policy', function (frame, url, policy) {
	    gui.Shell.openExternal(url);
	    policy.ignore();
      });

  var zoom = function () { win.zoomLevel += 1; }
  var unzoom = function () { win.zoomLevel -= 1; }
  var resetZoom = function () { win.zoomLevel = 0; }

  var init = function() {
    if (iframe &&
        iframe.contentWindow &&
        iframe.contentWindow.document &&
        iframe.contentWindow.document.body &&
        iframe.contentWindow.document.body.innerHTML) {
    } else {
      setTimeout(init, 100);
    }
  };

  init();
}).apply(this);
