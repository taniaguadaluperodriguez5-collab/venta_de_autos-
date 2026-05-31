document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.getElementById('formRegistro');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombreCompleto').value.trim();
            const tramite = document.getElementById('tipoTramite').value;
            const modelo = document.getElementById('modeloAuto').value.trim();
            const presupuesto = document.getElementById('presupuestoAuto').value.trim();

            if (!tramite) {
                alert('Por favor, selecciona un tipo de trámite válido.');
                return;
            }
            let mensajePersonalizado = '';

            if (tramite === 'comprar') {
                mensajePersonalizado = `¡Excelente elección, ${nombre}!\n\nHaz solicitado COMPRAR un ${modelo}.\nNuestro equipo evaluará tu presupuesto estimado de $${presupuesto} USD y un asesor te contactará en menos de 15 minutos.`;
            } else if (tramite === 'vender') {
                mensajePersonalizado = `¡Hola, ${nombre}!\n\nHaz registrado una solicitud para VENDER tu ${modelo}.\nAnalizaremos las condiciones del mercado para ofrecerte la mejor oferta base. ¡Espera nuestra llamada en 15 minutos!`;
            } else if (tramite === 'cotizar') {
                mensajePersonalizado = `¡Gracias por cotizar con AutoElite, ${nombre}!\n\nEstamos procesando la cotización para el modelo: ${modelo}.\nTe enviaremos los planes de financiamiento disponibles a tu contacto de inmediato.`;
            }

            alert(mensajePersonalizado);

            formulario.reset();
        });
    }

});
