import {fetchCircuits} from '../api/call-api-circuits.js';

const displayCircuits = async () =>{

    const character = document.getElementById('character');
   
    const details = await fetchCircuits();
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
                  <h3 class ="flex-item">${obj.name}</h3>
                  <h5 class="flex-item-circuit">Country: ${obj.country}</h5>
                  <h5 class="flex-item">Record Lap: ${obj.recordLap[0].name}</h5>
                  <h6 class="flex-item">Team: ${obj.recordLap[0].moto[0].mark}</h6>
                  
                </div>
              </div>
            </div>`

           character.innerHTML += DetailsHTML;



        });

     }




export {displayCircuits};