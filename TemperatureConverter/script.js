document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.getElementById("convert-button");
    var celsiusInput = document.getElementById("celsius");
    var kelvinOutput = document.getElementById("kelvin");
    var fahrenheitOutput = document.getElementById("fahrenheit");
    var form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    convertButton.addEventListener("click", function () {
        var celsius = celsiusInput.value;
        console.log(celsius + 20);

        celsiusInput.classList.remove("invalid");

        if (celsius.trim() === "" || isNaN(celsius)) {
            celsiusInput.classList.add("invalid");
            return;
        }

        celsius = parseFloat(celsius);

        celsiusInput.value = celsius;
        kelvinOutput.value = celsius + 273.15;
        fahrenheitOutput.value = celsius * 9 / 5 + 32;
    })
})