export const spinner = () => {
    const div = document.createElement('div');
    const html = `
        <div class="d-flex justify-content-center">
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
    div.innerHTML = html;
    return div;
}

export const crearCard = (personaje) => {
    const card = document.createElement('div');
    const html = `
    <div class="card m-2 mt-5" style="width: 18rem; float:left;">
        <img loading = "lazy" src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">${personaje.status}</p>
            <button class="btn btn-primary btn-block" 
                data-id="${personaje.id}"
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"> Ir hacia algún lado </button>
        </div>
    </div>`;
    card.innerHTML = html;
    return card;
}

export const  modalBody = (personaje) => {
    const div = document.createElement('div');
    const origen = personaje.origin.name;
    const location = personaje.location.name;
    const episodes = personaje.episode.length;
    let html = '';
    html += origen === 'unknow' ? ` <h4> Se desconoce su origen </h4>`:
        `<p> Viene de ${origen} </p>`;
    html += `Se encuentra en ${location}`;
    html += `<img src="${personaje.image}" class=""`;
    html += `<p> Aparece en ${episodes} episodios </p>`;
    div.innerHTML = html;
    return div;
}

