var countDownDate = new Date("Aug 9, 2024 12:00:00").getTime();
var x = setInterval(function(){ 
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    var heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondes = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("jours").innerHTML = jours;
    document.getElementById("heures").innerHTML = heures;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("secondes").innerHTML = secondes;

    },1000);
