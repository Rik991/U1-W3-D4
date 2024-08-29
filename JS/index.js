//_______________________TOMBOLA(BINGO!)____________________________

/*
1) CREA UN TABELLONE FORMATO DA 76 CELLE, NUMERATE CON I NUMERI DA 1 A 76
2)CREA UN BOTTONE PER SIMULARE L'ESTRAZIONE DI UN NUMERO (RANDOM)
3)DOPO L'ESTRAZIONE EVIDENZIA LA CELLA CORRISPONDENTE SUL TABELLONE
4)MANTIENI EVIDENZIATE LE CELLE CON I NUMERI ESTRATTI
   ____________EXTRA_____________
5)FAI IN MODO CHE UN NUMERO ESTRATTO NON SIA RICHIAMABILE
6) CREA LA TABELLINA PER UTENTE CON 24 NUMERI CHE SI ACCENDONO COME SUL TABELLONE
7)PERMETTI ALL'UTENTE DI SCEGLIERE QUANTE CARTELLE VUOLE
*/

let numberRandom = 0;

const createTabellone = () => {
  for (let i = 0; i < 76; i++) {
    const tableArea = document.getElementById("tabellone");
    const numberTableDiv = document.createElement("div");
    const numberOfTable = document.createElement("h3");
    numberOfTable.innerText = i + 1;
    numberTableDiv.appendChild(numberOfTable);
    tableArea.appendChild(numberTableDiv);
    //funzione evidenzia
  }
};

const estraiRandom = () => {
  const buttonRandom = document.querySelector("button");
  buttonRandom.onclick = () => {
    numberRandom = Math.floor(Math.random() * 76) + 1;

    console.log("Hai estratto il numero", numberRandom);

    const numberOnTable = document.querySelectorAll("h3");
    const tabelloneArray = Array.from(numberOnTable);
    tabelloneArray.forEach((numeroH3) => {
      if (parseInt(numeroH3.innerText) === numberRandom) {
        numeroH3.classList.add("evidenzia");
      }
    });
  };
};

window.onload = () => {
  createTabellone();
  estraiRandom();
};
