const dgclock = document.getElementById("dgclock");
setInterval(function () {
  let date = new Date();
  dgclock.innerHTML = date.toLocaleTimeString();
}, 1000);
