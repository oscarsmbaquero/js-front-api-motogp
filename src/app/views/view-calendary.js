
import { fetchCalendary } from "../api/api-calendary.js";

const displayCalendary = async () =>{

  const character = document.getElementById('character');
 
  const details = await fetchCalendary();
  console.log(details);
  character.innerHTML='';
  details.forEach(obj => {
        const DetailsHTML =
        ` <div class="card">
        <div class="card-header">${obj.date}</div>
        <div class="card-body">
       
        <h4>${obj.name[0].country}</h4>
        <h5>${obj.name[0].recordLap[0].name}</h5>
        <h5>${obj.name[0].recordLap[0].moto[0].team}</h5>
        </div>
       
      </div>`

         character.innerHTML += DetailsHTML;



      });

   }

export {displayCalendary};