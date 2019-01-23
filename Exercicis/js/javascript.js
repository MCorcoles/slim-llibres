function carrega_dades(url) {
    var dades;
    dades = new XMLHttpRequest();
    dades.onreadystatechange = function () {
        mostrar_dades(dades);
    };
    dades.open("GET", url, true);
    dades.send(null);
}

function mostrar_dades(dades) {
    if (dades.readyState == 4) {
        if (dades.status == 200) {
            var llibres = JSON.parse(dades.responseText).dades;
            console.log(llibres);
            
            var select = document.getElementById("select");

            for (var i in llibres) {
                var option = document.createElement("option");
                option.value = llibres[i].id_llib;
                var text = document.createTextNode(llibres[i].titol);
                option.appendChild(text);
                select.appendChild(option);
            }
        }
    }
}

window.onload = function () {
    var url = "http://localhost/phpExercicis/03.Tema03/rest-api-amb-slim-MartaCorVa/public/llibre/";
    carrega_dades(url);
     
    
}