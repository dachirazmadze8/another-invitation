(function () {
  // Oct 30, 2026 at 8:30 AM (visitor's local time; month is 0-based)
  var target = new Date(2026, 9, 30, 8, 30, 0);
  var $ = function (id) { return document.getElementById(id); };
  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function tick() {
    var diff = target - new Date();
    if (diff <= 0) {
      $("count").hidden = true;
      $("done").hidden = false;
      return false;
    }
    var s = Math.floor(diff / 1000);
    $("d").textContent = Math.floor(s / 86400);
    $("h").textContent = pad(Math.floor(s % 86400 / 3600));
    $("m").textContent = pad(Math.floor(s % 3600 / 60));
    $("s").textContent = pad(s % 60);
    return true;
  }

  if (tick()) {
    var t = setInterval(function () { if (!tick()) clearInterval(t); }, 1000);
  }
})();
