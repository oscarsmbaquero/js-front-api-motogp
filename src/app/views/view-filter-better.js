import {fetchCharacterList} from '../api/call-api-list';

const displayFilterBetter = async () =>{

    const character = document.getElementById('character');
    const filter = document.getElementById('filterSerie').value = 'Better Call Saul';
    console.log(filter);
    const details = await fetchCharacterList(filter);
    character.innerHTML='';
    let result = details.filter((element) => {

      return element.category === filter;
    });
        result.forEach(obj => {
          const DetailsHTML =
          ` <div class="flip-container">
              <div class="card">
                <div class="front">
                <p>  <img class="flex-item-image-detail" src="${obj.img}"/></p>
                </div>
                <div class="back">
                  <h3 class ="flex-item">${obj.name}</h3>
                  <h5 class="flex-item">${obj.nickname}</h5>
                  <h5 class="flex-item">${obj.portrayed}</h5>
                  
                </div>
              </div>
            </div>`
         
           character.innerHTML += DetailsHTML;



        });

     }




export {displayFilterBetter};