function loadDoc() {
    var url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
        .then(response => response.json())
        .then(function(response){
            console.log(response);
            var todoListe = response;
            var container = document.getElementById('container');
            for (var i = 0; i < todoListe.length; i++){
                var todo = todoListe[i];
                container.appendChild(createTodo(todo));
            }
        })
}       


function createTodo(todo) {
    var group = document.createElement('div');
    group.classList.add("group");
    var container = document.getElementById("container");
    container.appendChild(group);
    //todo Element erzeugen
    var todoElem = document.createElement('input');
    todoElem.type = "checkbox";
    todoElem.name = todo.title;
    todoElem.id = todo.id;

    //todo Element group hinzufügen
    group.appendChild(todoElem);
    var text = document.createTextNode(" " + todoElem.name);
    group.appendChild(text);
  
    // Loeschenbutton erzeugen
    var loeschen = document.createElement("button");
    loeschen.classList.add('button');
    loeschen.id = todoElem.id + "loeschen";
    // Loeschenbutton zu group hinzufuegen 
    group.appendChild(loeschen);
    loeschen.appendChild(document.createTextNode("löschen"));

    // Element loeschen
    var entfernen = document.getElementById(todoElem.id+"loeschen");
    entfernen.onclick = function(){
        console.log("entfernen");
        container.removeChild(group);
    };
    return group;
}

function bearbeiten(){
    var hinzu = document.getElementById("hinzufuegen");
    hinzu.onclick = function(){
        console.log("hinzufügen angeklickt");
        // neuen Eintrag einfuegen 
        var neuerEintrag = document.forms["eintrag"]["neu"].value;
        console.log("neuer Eintrag " +  neuerEintrag);
        var group = document.createElement('div');
        // input Element erzeugen 
        var input = document.createElement("input");
        input.type = "checkbox";
        input.name = neuerEintrag;
        input.id = neuerEintrag;
        console.log(input)
        // input Element zu group hinzufuegen
        var container = document.getElementById("container");
        container.appendChild(group);
        group.appendChild(input);
        var text = document.createTextNode(" " + neuerEintrag);
        group.appendChild(text);
        // Loeschenbutton erzeugen
        var loeschen = document.createElement("button");
        loeschen.classList.add('button');
        loeschen.id = neuerEintrag+ "loeschen";
        console.log(loeschen);
        // Loeschenbutton zu group hinzufuegen 
        group.appendChild(loeschen);
        loeschen.appendChild(document.createTextNode("löschen"));

        // Element loeschen
        var entfernen = document.getElementById(neuerEintrag + "loeschen");
        var elementloeschen = document.getElementById(neuerEintrag);
        entfernen.onclick = function(){
            console.log("entfernen");
            group.removeChild(entfernen);
            group.removeChild(elementloeschen); 
            group.removeChild(text);
        };
    };
}


bearbeiten(); 
loadDoc();
