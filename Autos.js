// Esperamos a que todo el HTML de la página esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Buscamos el formulario por su ID
    const formulario = document.getElementById('formRegistro');

    // Si el formulario existe en la página, le agregamos el evento de envío
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // ¡MUY IMPORTANTE! Evita que la página se recargue e intente buscar otra ruta
            event.preventDefault();

            // Capturamos los valores exactos que escribió o seleccionó el usuario
            const nombre = document.getElementById('nombreCompleto').value.trim();
            const tramite = document.getElementById('tipoTramite').value;
            const modelo = document.getElementById('modeloAuto').value.trim();
            const presupuesto = document.getElementById('presupuestoAuto').value.trim();

            // Validamos rápidamente que el usuario haya seleccionado una opción real
            if (!tramite) {
                alert('Por favor, selecciona un tipo de trámite válido.');
                return;
            }

            // Creamos una variable para armar el mensaje final personalizado
            let mensajePersonalizado = '';

            // Evaluamos qué opción seleccionó en el <select>
            if (tramite === 'comprar') {
                mensajePersonalizado = `¡Excelente elección, ${nombre}!\n\nHaz solicitado COMPRAR un ${modelo}.\nNuestro equipo evaluará tu presupuesto estimado de $${presupuesto} USD y un asesor te contactará en menos de 15 minutos.`;
            } else if (tramite === 'vender') {
                mensajePersonalizado = `¡Hola, ${nombre}!\n\nHaz registrado una solicitud para VENDER tu ${modelo}.\nAnalizaremos las condiciones del mercado para ofrecerte la mejor oferta base. ¡Espera nuestra llamada en 15 minutos!`;
            } else if (tramite === 'cotizar') {
                mensajePersonalizado = `¡Gracias por cotizar con AutoElite, ${nombre}!\n\nEstamos procesando la cotización para el modelo: ${modelo}.\nTe enviaremos los planes de financiamiento disponibles a tu contacto de inmediato.`;
            }

            // Mostramos la alerta bonita en la pantalla con la información procesada
            alert(mensajePersonalizado);

            // Limpiamos todos los campos del formulario automáticamente para que quede vacío de nuevo
            formulario.reset();
        });
    }

});