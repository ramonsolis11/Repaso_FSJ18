function mostrarTabla() {
    Swal.fire({
        title: "Ingrese un número",
        input: "number",
        inputAttributes: {
            min: 1,
        },
        showCancelButton: true,
        confirmButtonText: "Mostrar",
        showLoaderOnConfirm: true,
        preConfirm: (numero) => {
            mostrarTablaMultiplicar(numero);
        },
        allowOutsideClick: () => !Swal.isLoading(),
    });
}

function mostrarTablaMultiplicar(numero) {
    let tabla = "<h2>Tabla de multiplicar del " + numero + "</h2>";
    tabla += "<table>";
    tabla += "<tr><th>Factor</th><th>Resultado</th></tr>";

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabla += "<tr><td>" + numero + " x " + i + "</td><td>" + resultado + "</td></tr>";
    }

    tabla += "</table>";

    Swal.fire({
        title: "Tabla de Multiplicar",
        html: tabla,
        icon: "info",
    });
}