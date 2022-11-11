const button = document.getElementById("addButton")
button.addEventListener("click", () => {
    alert("click en el botón")
})

$(() => {
    $("#helloJQuery").click(() => {
        console.log("Hola, estoy utilizando jQuery");
    })
})