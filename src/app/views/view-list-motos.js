
import { fetchMotos } from "../api/call-api-motos.js";

const displayMotos = async () =>{

  const character = document.getElementById('character');
 
  const details = await fetchMotos();
  console.log(details);
  character.innerHTML='';
  details.forEach(obj => {
        const DetailsHTML =
        ` <div class="flip-container">
            <div class="card border-0">
              <div class="front">
              <p>  <img class="flex-item-image-detail" src="${obj.image}"/></p>
              </div>
              <div class="back">
                <h3 class ="flex-item">${obj.mark}</h3>
                <h5 class="flex-item">CV: ${obj.cv}</h5>
                <h5 class="flex-item">Weight: ${obj.weight} kg</h5>
              </div>
            </div>
          </div>`

         character.innerHTML += DetailsHTML;



      });

   }

export {displayMotos};