// --- Raul Ruiz Griego 60IDPRMA ---
// --- Fecha de entrega: 08/07/2026 ---
// --- Direccion APi---
const API_URL = "http://127.0.0.1:8000/api/peliculas";

// Esperar a que el DOM esté completamente cargado antes de ejecutar código
document.addEventListener('DOMContentLoaded', () => {
    console.log('Nesflis del Cesun cargado correctamente. ¡Listo para reproducir!');

    // --- aqui jalo la data de la api a la pagina ---
    cargarPeliculas();
});

// --- Funcion que pide las peliculas a la API y arma todo el html ---
async function cargarPeliculas() {
    try {
        const respuesta = await fetch(API_URL);
        const peliculas = await respuesta.json();

        const contenedorTarjetas = document.getElementById('contenedor-peliculas');
        const contenedorModales = document.getElementById('contenedor-modales');

        // --- por cada pelicula que llega de la api, se crea su tarjeta y su modal ---
        peliculas.forEach((peli) => {
            contenedorTarjetas.innerHTML += crearTarjeta(peli);
            contenedorModales.innerHTML += crearModal(peli);
        });

        // --- ya que existen los botones de "Reproducir", se les pone el evento de click ---
        activarBotonesPlay();

    } catch (error) {
        console.error('No se pudo conectar con la API:', error);
    }
}

// --- cuadrado de la peli (tarjeta chica que se ve en la fila principal) ---
function crearTarjeta(peli) {
    return `
        <div class="col">
            <div class="card h-100 movie-card text-white" data-bs-toggle="modal" data-bs-target="#modalPeli${peli.id}">
                <img src="${peli.poster}" class="card-img-top" alt="${peli.titulo}">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${peli.titulo}</h5>
                    <p class="card-text text-muted-custom small">${peli.categoria} • ${peli.anio}</p>
                </div>
            </div>
        </div>
    `;
}

// --- ventana emergente (modal) con el detalle completo de la peli ---
function crearModal(peli) {
    // titulo_completo es opcional, si no viene se usa el titulo normal
    const tituloMostrado = peli.titulo_completo ? peli.titulo_completo : peli.titulo;

    return `
        <div class="modal fade" id="modalPeli${peli.id}" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">

                    <!-- encabezado del modal -->
                    <div class="modal-header">
                        <h5 class="modal-title">${tituloMostrado}</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- cuerpo del modal, aqui va toda la info que manda la api -->
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-5 mb-3 mb-md-0">
                                <img src="${peli.poster}" class="img-fluid rounded" alt="Poster">
                            </div>
                            <div class="col-md-7">
                                <p class="text-success fw-bold">${peli.match}% de coincidencia <span class="text-white border px-2 py-0.5 ms-2 small">${peli.clasificacion}</span></p>
                                <p><strong>Año:</strong> ${peli.anio} | <strong>Duración:</strong> ${peli.duracion}</p>
                                <p><strong>Sinopsis:</strong> ${peli.sinopsis}</p>
                                <p class="small text-muted-custom"><strong>Elenco:</strong> ${peli.elenco}</p>
                                <p class="small text-muted-custom"><strong>Director:</strong> ${peli.director}</p>
                            </div>
                        </div>
                    </div>

                    <!-- pie del modal, boton de cerrar y boton de reproducir -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-stream px-4 btn-play" data-movie="${peli.titulo}">▶ Reproducir</button>
                    </div>

                </div>
            </div>
        </div>
    `;
}

// --- pone el evento de click a todos los botones de "Reproducir" ---
function activarBotonesPlay() {
    const playButtons = document.querySelectorAll('.btn-play');

    playButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const movieTitle = e.target.getAttribute('data-movie');
            // Aqui puedes cambiar este alert por la logica para abrir un reproductor de video real
            alert(`▶ Lanzando reproductor para: ${movieTitle}`);
        });
    });
}
