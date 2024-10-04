function validarNumeroControl() {
    // Obtener el número de control del input
    const numeroControl = document.getElementById('numeroControl').value;
    const mensaje = document.getElementById('mensaje');
    
    // Si la longitud es menor de 8 caracteres, no hacer nada
    if (numeroControl.length !== 8) {
        mensaje.textContent = "El número debe tener 8 dígitos.";
        mensaje.className = 'invalido';
        return;
    }

    // Dividir el número de control en tres partes
    const parte1 = numeroControl.substring(0, 2);  // Primeros dos dígitos
    const parte2 = numeroControl.substring(2, 4);  // Siguientes dos dígitos
    const parte3 = numeroControl.substring(4, 8);  // Últimos cuatro dígitos

    // Validar la primera parte (18-24)
    if (parte1 < 18 || parte1 > 24) {
        mensaje.textContent = "Los primeros dos dígitos deben estar entre 18 y 24.";
        mensaje.className = 'invalido';
        return;
    }

    // Validar la segunda parte (debe ser 84)
    if (parte2 !== '84') {
        mensaje.textContent = "Los segundos dos dígitos deben ser 84.";
        mensaje.className = 'invalido';
        return;
    }

    // Validar que la tercera parte tenga cuatro dígitos y sea un número
    if (parte3.length !== 4 || isNaN(parte3)) {
        mensaje.textContent = "Los últimos cuatro dígitos deben ser un número válido de 4 dígitos.";
        mensaje.className = 'invalido';
        return;
    }

    // Si pasa todas las validaciones
    mensaje.textContent = "Número de control válido.";
    mensaje.className = 'valido';
}