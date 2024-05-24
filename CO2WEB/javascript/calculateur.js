document.addEventListener('DOMContentLoaded', function() {
    var ppid = document.getElementById("popupid");
    var span = document.getElementsByClassName("close")[0];
    var resultElement = document.querySelector('.result');

    document.querySelector('.formcal').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var distance = parseFloat(document.getElementById('dist').value);
        var joursTravailles = parseInt(document.getElementById('jourt').value);

        var facteurEmission = 0.12;

        var emissions = distance * joursTravailles * facteurEmission;

        resultElement.textContent = "Les émissions de CO2 pour les trajets domicile / travail en voiture sont de " + emissions.toFixed(2) + " kg par mois.";
        ppid.style.display = "block";
    });

    span.onclick = function() {
        ppid.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == ppid) {
            ppid.style.display = "none";
        }
    }
});
