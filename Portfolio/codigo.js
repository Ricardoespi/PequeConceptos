for (let i = 0; i < 1; i++) {
    console.log(i);
}
function saludar()
{
var User = document.getElementById("txtUser").value;
var Pass = document.getElementById("txtPass").value;
alert("Bienvenido " + User)
console.log("Guarda tu contra: " + Pass);
}
function sumar()
{
    var n1 = parseInt(document.getElementById("txtUser").value);
    var n2 = parseInt(document.getElementById("txtPass").value);
    alert("La suma es: " + (n1+ n2));
}