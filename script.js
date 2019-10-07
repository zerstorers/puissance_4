var div = document.createElement("div");
document.body.appendChild(div);

var tableau = document.createElement("table");
document.body.appendChild(tableau);

var button = document.createElement("div");
// Creation du tableau

for (let btn = 0; btn < 7; btn++){
    var button = document.createElement("div");
    div.appendChild(button)
    button.setAttribute("class", "div1")
    button.id = btn
}

for (let i = 0; i < 6; i++) {
    var tr = document.createElement("tr");
    tableau.appendChild(tr);
    for (let j = 0; j < 7; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.id = j + "-" + i;
    }
}

// Fin creation tableau

button.addEventListener("clcik", function(){
    var pion = document.createElement("div");
    td.appendChild(pion)
    pion.id = pion
})