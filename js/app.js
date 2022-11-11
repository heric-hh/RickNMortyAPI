import { showModal, navegacion, loadData, urlBase } from './eventos.js'

document.querySelector('#respuesta').addEventListener('click', showModal);
loadData(urlBase);
document.querySelector('.botones').addEventListener('click', navegacion);







