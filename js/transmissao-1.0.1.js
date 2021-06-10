(function () {
  //== https://www.w3schools.com/howto/howto_js_countdown.asp
  // Set the date we're counting down to
  var countDownDate = new Date('Jun 7, 2021 19:00:00').getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById('counterBoy').innerHTML =
      "<div class='ctdw'><h1>" +
      days +
      "</h1><span>Dias</span></div> <div class='ctdw'><h1>" +
      hours +
      "</h1><span>Horas</span></div> <div class='ctdw'><h1>" +
      minutes +
      "</h1><span>Minutos</span></div> <div class='ctdw'><h1>" +
      seconds +
      '</h1><span>Segundos</span></div>';

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('counterBoy').innerHTML = '¡Ha llegado!';
    }
  }, 1000);
})();
