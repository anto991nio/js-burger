/* Come prima cosa procedo a creare una variabile per il mio pulsante in modo da poter creare delle azioni */

var submitButton = document.getElementById("button");

/* ore creiamo delle azioni al cliccarsi del button */
submitButton.addEventListener("click", function () {

    /* ora collechiamo il campo nome burger a questa variabile, in modo da poter verificare se il cliente immette o no il nome */
    var nameBurger = document.getElementById("name")

    /* con questo if verifichiamo se il cliente ha messo dei valori, nel caso in cui non lo ha fatto gli comunichiamo con un alert di inserirlo */
    if (!nameBurger.value) {
        alert("Campo Name Your Burger vuoto, inserire il nome del tuo burger");
    }else{

    /* andiamo quindi ora ad estrarre  tutti gli ingredienti tramite una variebile */
    var ingredientsList = document.querySelectorAll(".ingredient [type='checkbox']");

    /* facciamo una prova con console per vedere se gli input vengono stampati */

    console.log(ingredientsList);

    /* ora calcoliamo il prezzo del panino, aggiungendo solo ciò che viene scelto dal cliente */

    /* creiamo una variabile di partenze da sommare ai valori degli ingredienti */

    var sum = 50;

    /* con un ciclo andiamo a scorrere tutti gli input, se risultato true vanno ad incrementare la somma altrimenti non vengono aggiunti */

    for (var i = 0; i < ingredientsList.length; i++) {

        var ingredients = ingredientsList[i];

        if (ingredients.checked) {

            sum += parseInt(ingredients.value);
        }
    }


    /* ora andiamo a verificare i codici sconto */

    var couponCodes =["90354BECKEF" , "75362FHJILP" , "85123OLSGBF", "87423SJNCDS"]


    var discountCoupon = document.getElementById("coupon");

    for (var i = 0; i < couponCodes.length; i++) {

        var coupon = couponCodes[i];

        if (coupon === discountCoupon.value) {

            sum = sum - 10;
        }

    }
    /* a questo punto scriviamo la somma nell'html */
    document.getElementById("price").innerHTML = sum ;

    

    }


})
