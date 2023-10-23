let items = document.querySelectorAll('.progress-item');
const counters = Array(items.length);
const intervals = Array(items.length);
counters.fill(0);
items.forEach((number, index) => {
    intervals[index] = setInterval(() => {
        if (counters[index] == parseInt(number.dataset.num)) {
            clearInterval(intervals[index]);
        } else {
            counters[index] += 1;
            number.style.background = "conic-gradient(#F6F6F6 calc(" + counters[index] * 10 + "%), gray 0deg)";
            number.setAttribute('data-value', counters[index] + "/4");
            number.innerHTML = counters[index] + "%";
        }
    }, 15);
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener los botones por su clase
    const pendientesButton = document.querySelector(".pendientes");
    const completadosButton = document.querySelector(".completados");
    const todosButton = document.querySelector(".todos");

    // Obtener todos los elementos que deseas filtrar
    const elementos = document.querySelectorAll(".elemento");
    const elementos1 = document.querySelectorAll(".elemento1");


    // Agregar un evento de clic al botón "Pendientes"
    pendientesButton.addEventListener("click", function () {
        // Ocultar todos los elementos
        elementos.forEach(function (elemento) {
            elemento.style.display = "none";
        });

        // Mostrar solo los elementos con la clase "pendiente"
        const elementosPendientes = document.querySelectorAll(".pendiente");
        elementosPendientes.forEach(function (elemento) {
            elemento.style.display = "block";
        });
    });

    // Agregar un evento de clic al botón "Completados"
    completadosButton.addEventListener("click", function () {
        // Ocultar todos los elementos
        elementos.forEach(function (elemento) {
            elemento.style.display = "none";
        });

        // Mostrar solo los elementos con la clase "completado"
        const elementosCompletados = document.querySelectorAll(".completado");
        elementosCompletados.forEach(function (elemento) {
            elemento.style.display = "block";
        });
    });

    // Agregar un evento de clic al botón "Todos"
    todosButton.addEventListener("click", function () {
        // Mostrar todos los elementos
        elementos.forEach(function (elemento) {
            elemento.style.display = "block";
        });
    });
});