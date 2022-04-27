import {fetchCharacterList} from '../api/call-api-list';

const displayNameCharacter = async () =>{

    const character = document.getElementById('character');
    const characterId = document.getElementById('characterName').value;//el valor del input
    const details = await fetchCharacterList(characterId);

    character.innerHTML=''; //limpiar la vista
    const char = details.find(element => element.name === characterId);
    console.log(char);
    if(char !== undefined && char.name === characterId){
    const DetailsHTML =
    `<div class = details-container> 
    <li class="details-item">
        <img class="details-item__image__detail" src="${char.img}"/>
        <div class= "details__h">
          <h5 class="details-item__text">Personaje : ${char.name }</h5>
          <h5 class="details-item__text">Apodo : ${char.nickname}</h5>
          <h5 class="details-item__text"> Serie : ${char.category}</h5>
          <h5 class="details-item__text">Interprete : ${char.portrayed}</h5>
        </div>
    </li>;
   </div> `; 

     character.innerHTML = DetailsHTML;
    }else{
        Swal.fire('Debes de introducir un nombre correcto');
    }

};
export {displayNameCharacter};