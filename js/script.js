// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// clicco su bottone e il main passa da display none a block:
let button = document.querySelector("button");
let main = document.querySelector("main");

button.addEventListener("click",
    function(){
        main.style.display = "block"
    }
);

// creo le celle quindi:

// 1- prendo il div container:
let container = document.querySelector(".container");

// 2- mi servo del ciclo per crearmi le boxes e aggiungo la classe da CSS:
for (let i = 1; i <= 100; i++){

    let element = document.createElement("div");
    element.append(i);
    element.classList.add("box");
    container.append(element);

    // devo creare una funzione in cui al click sul quadrato, questo si colora:
    element.addEventListener("click",
        function(){
            element.classList.add("clicked-box");
            console.log(i);
        }
        
    );
}

