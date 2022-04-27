


const  fetchCharacterList = async () => {
    //const url ='https://motogp-oscar.herokuapp.com/pilots'
    const url = 'http://localhost:5000/pilots';
    const res =  await fetch(url);// creo la variable 'res' donde introduzco   los datos traidos de la api

   let result = await res.json();

   //console.log(result);


       return result;

}

export { fetchCharacterList };