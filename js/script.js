/* Come prima cosa procedo a creare una variabile per il mio pulsante in modo da poter creare delle azioni */

var submitButton = document.getElementById("button");

/* ore creiamo delle azioni al cliccarsi del button */
submitButton.addEventListener("click", function(){

    /* ora collechiamo il campo nome burger a questa variabile, in modo da poter verificare se il cliente immette o no il nome */
    var nameBurger = document.getElementById("name")

    /* con questo if verifichiamo se il cliente ha messo dei valori, nel caso in cui non lo ha fatto gli comunichiamo con un alert di inserirlo */
    if(!nameBurger.value){
        alert("Campo Name Your Burger vuoto, inserire il nome del tuo burger");
    }

    
})
