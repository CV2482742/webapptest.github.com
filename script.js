




function eCalc() {

    // Recupero dati dagli input box
    const pun = document.getElementById("pun").value;
    const spread = document.getElementById("spread").value;
    const perd = document.getElementById("perd").value;
    const kwh = document.getElementById("kwh").value;

    // Conversione dei dati recuperati in numeri decimali
    const num1 = parseFloat(pun) || 0;
    const num2 = parseFloat(spread) || 0;
    const num3 = parseFloat(perd) || 0;
    const num4 = parseFloat(kwh) || 0;
    const cconPrivati = 23.16;
    const cconAziende = 23.16;

    // Acuisizione scelta dai pulsanti a scelta multipla
    const scelta = document.querySelector('input[name="pbE"]:checked');

    // Verifica della scelta effettuata tra Privati ed Aziende 
    if (scelta) {
        const valoreSelezionato = scelta.value;
    
        // Sviluppo della soluzione Privati
        if (valoreSelezionato === "Privati") {
            const ePriv = (((pun + spread)*perd)*kwh) + cconPrivati
            document.getElementById("eResult").textContent = ePriv;

        // Sviluppo della soluzione Aziende
        } else if (valoreSelezionato === "Aziende") {
            const somma = num1 - num2 - num3 - num4;
            document.getElementById("eResult").textContent = somma;

        }
    } else {
        // Risposta nel caso in cui non si dovesse scegliere nessun valore
        document.getElementById("eResult").textContent = "Selezionare il tipo di contratto";
    }

}


function gCalc() {

    // Recupero dati dagli input box
    const input1 = document.getElementById("v5").value;
    const input2 = document.getElementById("v6").value;
    const input3 = document.getElementById("v7").value;
    const input4 = document.getElementById("v8").value;

    // Conversione dei dati recuperati in numeri decimali
    const num1 = parseFloat(input1) || 0;
    const num2 = parseFloat(input2) || 0;
    const num3 = parseFloat(input3) || 0;
    const num4 = parseFloat(input4) || 0;

    // Acuisizione scelta dai pulsanti a scelta multipla
    const scelta = document.querySelector('input[name="pbG"]:checked');

    // Verifica della scelta effettuata tra Privati ed Aziende 
    if (scelta) {
        const valoreSelezionato = scelta.value;
    
        // Sviluppo della soluzione Privati
        if (valoreSelezionato === "Privati") {
            const somma = num1 + num2 + num3 + num4;
            document.getElementById("gResult").textContent = somma;

        // Sviluppo della soluzione Aziende
        } else if (valoreSelezionato === "Aziende") {
            const somma = num1 - num2 - num3 - num4;
            document.getElementById("gResult").textContent = somma;

        }
    } else {
        // Risposta nel caso in cui non si dovesse scegliere nessun valore
        document.getElementById("gResult").textContent = "Selezionare il tipo di contratto";
    }

}
