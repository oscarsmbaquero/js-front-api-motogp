import {fetchCharacterList} from '../api/call-api-list';

const displaySwal  = async () =>{
    
    const character = document.getElementById('character');
    const characterId = document.getElementById('characterName').value;
    const details = await fetchCharacterList(characterId);

    const { value: data} = Swal.fire({
        title: "Tu nombre",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        inputValidator: nombre => {
            // Si el valor es válido, debes regresar undefined. Si no, una cadena
            if (!nombre) {
                return "Por favor escribe tu nombre";
            } else {
                return undefined;
            }
        }
    })
    .then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;
            const character = document.getElementById('character');
            let valueSwal = nombre;
            console.log(valueSwal);
            // console.log("Hola, " + nombre);
        }

    });

  
} 



export { displaySwal };