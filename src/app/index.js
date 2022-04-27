
import{displayMotos} from './views/view-list-motos.js';

import{displayPilots} from './views/view-pilots';
import{displayCircuits} from './views/view-circuits';
import{displayCalendary} from './views/view-calendary.js';


import './styles/styles.scss';
import 'bootstrap';

const addListeners = () => {
 
   document.getElementById('pilot').addEventListener('click',displayPilots);//evento para filtrar personajes Breaking Bad
   document.getElementById('moto').addEventListener('click',displayMotos);//evento para filtrar personajes Better Call Saul
   document.getElementById('circuit').addEventListener('click',displayCircuits);//evento para filtrar personajes Breaking Bad
   document.getElementById('calendary').addEventListener('click',displayCalendary);//evento para filtrar personajes Breaking Bad

  

  
}


window.onload = () => {
  addListeners();
};
