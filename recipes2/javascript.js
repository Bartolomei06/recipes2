// Función para agregar ingredientes a la lista
function agregaringrediente(ingrediente) {
    const listaIngredientes = document.getElementById('listaingrediente');
    
    if (ingrediente.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        listaIngredientes.appendChild(li);
        document.getElementById('ingrediente').value = '';
    } else {
        alert('Por favor, ingrese un ingrediente.');
    }
}

// Función para filtrar recetas según los filtros seleccionados
function filtrarRecetas() {
    const vegano = document.getElementById('vegano').checked;
    const vegetariano = document.getElementById('vegetariano').checked;

    const recetas = document.querySelectorAll('#recetas .receta');

    recetas.forEach(receta => {
        const tipo = receta.getAttribute('data-type');
        if ((tipo === 'vegano' && vegano) || (tipo === 'vegetariano' && vegetariano) || (!vegano && !vegetariano)) {
            receta.style.display = '';
        } else {
            receta.style.display = 'none';
        }
    });
}

// Función para generar recetas basadas en los ingredientes ingresados
function generarRecetas() {
    const ingredientesIngresados = Array.from(document.querySelectorAll('#listaingrediente li')).map(li => li.textContent.trim().toLowerCase());
    const recetas = document.querySelectorAll('#recetas .receta');

    let algunaRecetaVisible = false;

    recetas.forEach(receta => {
        const ingredientesReceta = receta.getAttribute('data-ingredients').split(',').map(ing => ing.trim().toLowerCase());
        const contieneTodosIngredientes = ingredientesIngresados.every(ing => ingredientesReceta.includes(ing));

        if (contieneTodosIngredientes) {
            receta.style.display = '';
            algunaRecetaVisible = true;
        } else {
            receta.style.display = 'none';
        }
    });

    // Mostrar la lista de recetas solo si al menos una receta es visible
    const listaRecetas = document.getElementById('recetas-lista');
    listaRecetas.style.display = algunaRecetaVisible ? '' : 'none';
}

// Configuración inicial de eventos cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    // No es necesario para botones ya que los onclick están en HTML, pero útil para pruebas.
});
