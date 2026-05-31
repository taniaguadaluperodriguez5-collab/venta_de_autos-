function seleccionarAuto(modelo, precio) {
    document.getElementById('autoElegido').value = modelo;
    document.getElementById('precioElegido').value = "$" + precio.toLocaleString() + " USD";
    
    // Desplazamiento automático suave hasta el formulario de registro
    document.querySelector('.registro-compra').scrollIntoView({ behavior: 'smooth' });
}

function registrarCompra(event) {
    event.preventDefault();
    
    const auto = document.getElementById('autoElegido').value;
    const precio = document.getElementById('precioElegido').value;
    const nombre = document.getElementById('nombreComprador').value;
    const identificacion = document.getElementById('idComprador').value;
    const cuadroMensaje = document.getElementById('mensajeExito');
    
    cuadroMensaje.className = "alerta-visible";
    cuadroMensaje.innerHTML = `
        <h3>¡Registro Completado con Éxito!</h3>
        <p><strong>Cliente Comprador:</strong> ${nombre}</p>
        <p><strong>Documento de Identidad:</strong> ${identificacion}</p>
        <p><strong>Vehículo Asignado:</strong> ${auto}</p>
        <p><strong>Monto Neto de Operación:</strong> ${precio}</p>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #bbf7d0;">
        <small>Su folio de apartado ha sido enviado al sistema de AutoElite.</small>
    `;
    
    document.getElementById('formRegistro').reset();
}