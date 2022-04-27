

import {fetchCharacterList} from '../api/call-api-pilots';

const displayCharacterList = () =>{
    
    const character = document.getElementById('character');
    character.innerHTML='';

    const classListPromise = fetchCharacterList();
    
    classListPromise.then((characterList) => {
        console.log(characterList);
        characterList.forEach((element) => {
             //console.log(element.name);
            const li = document.createElement('li');
             li.classList.add('flex-item-li');
            //name
            const h4 = document.createElement('h4');
            h4.setAttribute('class', 'flex-item');
            h4.innerHTML = `${element.name}`;
            li.appendChild(h4);
            //nickname
            const h5 = document.createElement('h5');
            h5.setAttribute('class', 'flex-item');
            h5.innerHTML = `${element.moto[0].team}`;
            li.appendChild(h5);

            const h6 = document.createElement('h6');
            h6.setAttribute('class', 'flex-item');
            h6.innerHTML = `${element.dorsal}`;
            li.appendChild(h6);
            
            //image
            const img = document.createElement('img');//creo el archivo imagen
            img.setAttribute('class', 'flex-item-image');//añado el atributo y la clase
            img.setAttribute('src', element.image);//añado la imagen
            //console.log(element.img);
            li.appendChild(img);
            //actor
            
            character.appendChild(li);//subida de datos
            
        });
    });

};
// const handleScroll = (event) => {
//     if (Math.ceil(window.scrollY) == Math.ceil(document.querySelector('body').scrollHeight - window.innerHeight)) {
//       offset += 10;
//       if (document.getElementById('character').childElementCount > 1 && offset < 100) {
//         displayCharacterList(event, offset);
//       }
//     }
//   }

    export {displayCharacterList};










