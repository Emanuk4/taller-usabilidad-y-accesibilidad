document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Validación simple
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        // Simulación de guardar datos
        let formData = { nombre: name, correo: email, telefono: phone, mensaje: message };
        
        for (let key in formData) {
            console.log(key + ": " + formData[key]);
        }
        
        alert("¡Formulario enviado con éxito!");
    }
});


