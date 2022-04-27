import { fetchCharacterDetail } from "../api/call-api-detail";
import { CharacterRandomizer } from '../models/character';

const displayCharacterRandom = async () => {
  const character = document.getElementById('character');
  const characterId = Math.floor(Math.random() * (60 - 1) + 1);
    //const characterId = '15';
  const person = await fetchCharacterDetail(characterId);
  const character1 = person[0];
  console.log('imprimiendo persona', person);
  const myCharacterClass = new CharacterRandomizer(
    character1.char_id,
    character1.img,
    character1.name,
    character1.nickname,
    character1.category,
    character1.portrayed,
  );
  // console.log(myCharacterClass);
  const DetailsHTML =
    `<li class="flex-item">
        <img class="flex-item-image-detail" src="${myCharacterClass.getCharacterImg()}"/>
        <h5 class="flex-item__text__random">${ myCharacterClass.getCharacterName() }</h5>
        <h5 class="flex-item__text__random">${myCharacterClass.getCharacterNickName()}</h5>
        <h5 class="flex-item__text__random">${myCharacterClass.getCharacterCategory()}</h5>
    </li>`;
  character.innerHTML = DetailsHTML;
};

export { displayCharacterRandom }