// JavaScript básico para manejar el formulario

document.getElementById("enviar").addEventListener("click", function() {
    // Obtenemos los valores seleccionados en el formulario
    let baseVino = document.getElementById("baseVino").value;
    let edulcorante = document.getElementById("edulcorante").value;
    let licor = document.getElementById("licor").value;
    let fechaEntrega = document.getElementById("fechaEntrega").value;

    // Obtenemos las frutas seleccionadas (hasta 3)
    let frutasSeleccionadas = [];
    let frutas = document.getElementsByName("frutas");
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].checked) {
            frutasSeleccionadas.push(frutas[i].value);
        }
    }
    
    // Obtenemos las especias seleccionadas (hasta 3)
    let especiasSeleccionadas = [];
    let especias = document.getElementsByName("especias");
    for (let i = 0; i < especias.length; i++) {
        if (especias[i].checked) {
            especiasSeleccionadas.push(especias[i].value);
        }
    }

    // Validaciones simples
    if (baseVino === "" || edulcorante === "" || licor === "" || frutasSeleccionadas.length === 0 || especiasSeleccionadas.length === 0 || fechaEntrega === "") {
        alert("Por favor, complete todos los campos, seleccione al menos una fruta y una especia, y asegúrese de que la fecha de entrega esté seleccionada.");
    } else if (frutasSeleccionadas.length > 3) {
        alert("Por favor, seleccione solo hasta 3 frutas.");
    } else if (especiasSeleccionadas.length > 3) {
        alert("Por favor, seleccione solo hasta 3 especias.");
    } else {
        // Resumen del pedido
        let resumen = "Resumen de su pedido:\n";
        resumen += "Base de vino: " + baseVino + "\n";
        resumen += "Frutas: " + frutasSeleccionadas.join(", ") + "\n";
        resumen += "Edulcorante: " + edulcorante + "\n";
        resumen += "Licor: " + licor + "\n";
        resumen += "Especias: " + especiasSeleccionadas.join(", ") + "\n";
        resumen += "Fecha de entrega: " + fechaEntrega;

        // Mostrar el resumen al usuario
        document.getElementById("resumen").focus();
alert("¡Formulario enviado con éxito! Resumen de su pedido:\n" + resumen);
    }
});

document.getElementById("enviar").addEventListener("click", function() {
    // Obtenemos los valores seleccionados en el formulario
    let baseVino = document.getElementById("baseVino").value;
    let edulcorante = document.getElementById("edulcorante").value;
    let licor = document.getElementById("licor").value;
    let fechaEntrega = document.getElementById("fechaEntrega").value;

    // Obtenemos las frutas seleccionadas (hasta 3)
    let frutasSeleccionadas = [];
    let frutas = document.getElementsByName("frutas");
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].checked) {
            frutasSeleccionadas.push(frutas[i].value);
        }
    }
    
    // Obtenemos las especias seleccionadas (hasta 3)
    let especiasSeleccionadas = [];
    let especias = document.getElementsByName("especias");
    for (let i = 0; i < especias.length; i++) {
        if (especias[i].checked) {
            especiasSeleccionadas.push(especias[i].value);
        }
    }

    // Validaciones simples
    if (baseVino === "" || edulcorante === "" || licor === "" || frutasSeleccionadas.length === 0 || especiasSeleccionadas.length === 0 || fechaEntrega === "") {
        alert("Por favor, complete todos los campos, seleccione al menos una fruta y una especia, y asegúrese de que la fecha de entrega esté seleccionada.");
    } else if (frutasSeleccionadas.length > 3) {
        alert("Por favor, seleccione solo hasta 3 frutas.");
    } else if (especiasSeleccionadas.length > 3) {
        alert("Por favor, seleccione solo hasta 3 especias.");
    } else {
        // Resumen del pedido
        let resumen = "Resumen de su pedido:\n";
        resumen += "Base de vino: " + baseVino + "\n";
        resumen += "Frutas: " + frutasSeleccionadas.join(", ") + "\n";
        resumen += "Edulcorante: " + edulcorante + "\n";
        resumen += "Licor: " + licor + "\n";
        resumen += "Especias: " + especiasSeleccionadas.join(", ") + "\n";
        resumen += "Fecha de entrega: " + fechaEntrega;

        // Mostrar el resumen al usuario
        alert("¡Formulario enviado con éxito! Resumen de su pedido:\n" + resumen);
    }
});
