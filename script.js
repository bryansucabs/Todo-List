
/* Agregar un elemetno de la lista  */
function nuevoElemento() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("button").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Llena el espacio en blanco");
    } else {
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("button").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "del";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            updateTotalTasks();
            updateCompletedTasks();
            updateRemainingTasks();
        }
    }
    updateTotalTasks();

    updateRemainingTasks();
}
/*boton complete todas las tareas*/
function Completar() {
    var myNodelist = document.getElementsByTagName("LI");
    for (var i = 0; i < myNodelist.length; i++) {
        myNodelist[i].classList.add('checked');
    }
    updateCompletedTasks();
    updateRemainingTasks();
}
var del = document.getElementsByClassName("del");
var i;
for (i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        updateTotalTasks();
        updateCompletedTasks();
        updateRemainingTasks();
    }
}

/* Tachar */
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        updateCompletedTasks();
        updateRemainingTasks();
    }
}, false);

