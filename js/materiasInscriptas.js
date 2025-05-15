let materiasInscriptas = [];
let materias = []
function mostrarMateriasInscriptas() {
    materiasInscriptas = materias.filter(materia => materia.estaInscripto);
    const section = document.getElementById('container-materias-ins');
    section.innerHTML = ''; // Limpiar el contenido previo

    materiasInscriptas.forEach(materia => {
        const card = document.createElement('article');
        card.className = "card"; 
        const cuatrimestreText = formatCuatrimestre(materia.cuatrimestre);
        card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${materia.nombre}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${cuatrimestreText}</h6>
                        <p class="card-text">${materia.descripcion}</p>
                    </div>`;
        section.appendChild(card);
    });
    
}

function formatCuatrimestre(cuatrimestre){
    const arrText = cuatrimestre.split("/");
    return `Cuatrimestre ${arrText[0]} del ${arrText[1]}`;
}

function darDeBajaAMateria(id, nombre){
    const materiaInscripta = document.getElementById("materia_" + id);
    if (materiaInscripta){
        alert("Te diste de baja de la materia " + nombre);
        materiaInscripta.style.display = "none";
        const materiaRecomendada = document.getElementById("materiaRecomendada_" + id);
        if(materiaRecomendada){
            materiaRecomendada.style.display = "none";
        }
    }
}
fetch('/static/data/materias.json')
    .then(res => res.json())
    .then(data => {
        materias = data; // Puedo asignar data al array materias porque tambien es un array
        mostrarMateriasInscriptas();
    })
    .catch(error => {
        console.error("Error al cargar materias:", error);
    });

