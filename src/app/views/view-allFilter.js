

 const displayAllFilters = () =>{
    // console.log('Entro');
    var elementToBeToggled = document.getElementById("elementToBeToggled");
    character.innerHTML='';

    if (elementToBeToggled.style.display === "none") {
        elementToBeToggled.style.display = "block";
    } else {
        elementToBeToggled.style.display = "none";
    }
}



 
export { displayAllFilters};