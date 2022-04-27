import {fetchCharacterList} from '../api/call-api-pilots.js';

const displayPilots = async () =>{

    const character = document.getElementById('character');
   
    const details = await fetchCharacterList();
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
                  <h5 class="flex-item">${obj.dorsal}</h5>
                  <h6 class="flex-item-team">${obj.moto[0].team}</h6>
                  
                </div>
              </div>
            </div>`

           character.innerHTML += DetailsHTML;



        });

     }




export {displayPilots};