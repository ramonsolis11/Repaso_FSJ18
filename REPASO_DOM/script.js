// Obtener una referencia a la pantalla de la calculadora
const display = document.querySelector("#display");

// Obtener todos los botones de la calculadora
const buttons = document.querySelectorAll("button");

// Iterar sobre cada botón
buttons.forEach((item) => {
    // Asignar una función cuando se hace clic en un botón
    item.onclick = () => {
        // Verificar si se presionó el botón "clear"
        if (item.id == "clear") {
            // Si se presionó el botón "clear", se borra el contenido de la pantalla
            display.innerText = "";
        }
        // Verificar si se presionó el botón "backspace"
        else if (item.id == "backspace") {
            // Si se presionó el botón "backspace", se elimina el último número o operador de la pantalla
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }
        // Verificar si la pantalla no está vacía y se presionó el botón "=" (equal)
        else if (display.innerText != "" && item.id == "equal") {
            // Si es así, se realiza el cálculo de lo que está en la pantalla y se muestra el resultado
            display.innerText = eval(display.innerText);
        }
        // Verificar si la pantalla está vacía y se presionó el botón "=" (equal)
        else if (display.innerText == "" && item.id == "equal") {
            // Si es así, se muestra "Null" en la pantalla durante 2 segundos y luego se borra
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            // Si se presionó cualquier otro botón, se agrega su ID al contenido de la pantalla
            display.innerText += item.id;
        }
    };
});

// Cambiar el tema de la calculadora
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick = () => {
    // Alternar la clase "dark" en la calculadora para cambiar el tema
    calculator.classList.toggle("dark");
    // Alternar la clase "active" en el botón del tema para cambiar su apariencia
    themeToggleBtn.classList.toggle("active");
    // Actualizar la variable isDark según el estado actual del tema
    isDark = !isDark;
};
