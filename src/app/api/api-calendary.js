

const fetchCalendary = async () =>{
    const url = 'https://motogp-oscar.herokuapp.com/calendary'
    //const url ='http://localhost:5000/calendary'
    const res =  await fetch(url);

    const result = await res.json();

    //console.log(result);

    return result;

}

export {fetchCalendary};