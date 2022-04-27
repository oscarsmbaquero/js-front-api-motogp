

const fetchCircuits = async () =>{
    //const url = 'http://localhost:5000/circuits'
    const url = 'https://motogp-oscar.herokuapp.com/calendary'
    const res =  await fetch(url);

    const result = await res.json();

    //console.log(result);

    return result;

}

export {fetchCircuits};