var div = document.createElement("div");
document.body.appendChild(div);

var tableau = document.createElement("table");
document.body.appendChild(tableau);

var button = document.createElement("div");
// Creation du tableau

for (let i = 0; i < 6; i++) {
    var tr = document.createElement("tr");
    tableau.appendChild(tr);
    for (let j = 0; j < 7; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.id = i + "-" + j;
    }
}

// Fin creation tableau

for (let btn = 0; btn < 7; btn++) {
    var button = document.createElement("div");
    div.appendChild(button)
    button.setAttribute("class", "div1")
    button.id = btn
    button.addEventListener("click", function () {
        var colon_num = this.id
        var column_cells = document.querySelectorAll("td[id$='-"+colon_num+"']")
        var first_empty_cell = column_cells[column_cells.length - 1]
        
        var pion = document.createElement("div")  
        first_empty_cell.appendChild(pion)
        first_empty_cell.classList.add("full")
        pion.id = "pion"
     })
}

