var url = 'https://jsonplaceholder.typicode.com/users/1';
var data = [{
        	    username: 'example', 
                userId: 123456789},
            {
               username: '1234',
               userId: 1, 
            }];

fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
.then (response => console.log('Success', JSON.stringify(response)))
.catch(error => console.error('Error',error));


// Funktion zum Erscheinen des Eingabefeldes
function neuanlegen(){
    var buttonHinzufuegen = document.getElementById("hinzufuegen");
    buttonHinzufuegen.onclick = function() {
        var hinzufuegen = document.getElementById("hinzu"); 
        hinzufuegen.style.display = "block";
        console.log("angeklickt");
    };
}

function bearbeiten(){
    var bestaetigen = document.getElementById("be");
    bestaetigen.onclick = function(){
        console.log("bestätigen angeklickt");
        // neuen Eintrag einfuegen 
        var neuerEintrag = document.forms["eintrag"]["neu"].value;
        console.log("neuer Eintrag "+neuerEintrag);
        var container = document.getElementById("container");
        // input Element erzeugen 
        var input = document.createElement("input");
        input.type = "checkbox";
        input.name = neuerEintrag;
        input.id = neuerEintrag;
        console.log(input)
        // input Element zu container hinzufuegen
        container.appendChild(input);
        var text = document.createTextNode(" " + neuerEintrag);
        container.appendChild(text);
        // Loeschenbutton erzeugen
        var loeschen = document.createElement("button");
        loeschen.id = neuerEintrag +"loeschen";
        console.log(loeschen);
        // Loeschenbutton zu container hinzufuegen 
        container.appendChild(loeschen);
        loeschen.appendChild(document.createTextNode("löschen"));
        container.appendChild(document.createElement("br"));

        // Element loeschen
        var entfernen = document.getElementById(neuerEintrag+"loeschen");
        var elementloeschen = document.getElementById(neuerEintrag);
        entfernen.onclick = function(){
            console.log("entfernen");
            container.removeChild(entfernen);
            container.removeChild(elementloeschen); 
            container.removeChild(text);
            container.removeChild(container.lastChild);
        };
    };
}

neuanlegen();
bearbeiten(); 