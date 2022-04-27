

const fetchMotos = async () =>{
    const url = 'https://motogp-oscar.herokuapp.com/motos'
    //const url = 'http://localhost:5000/motos'
    //const url = `https://breakingbadapi.com/api/characters/ ${characterId}`;
    const res =  await fetch(url);

    const result = await res.json();

    //console.log(result);

    return result;

}

export {fetchMotos};