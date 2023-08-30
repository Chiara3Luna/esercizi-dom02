function getNomiBuddy(arrayBuddy) {
    let nomiBuddy = [];
    
    for (let i = 0; i < arrayBuddy.length; i++) {
        let buddy = arrayBuddy[i];
        nomiBuddy.push(buddy.nome);
    }
    
    return nomiBuddy;
}

// Esempio di utilizzo della funzione
let input = [
    { nome: 'ILaria', cognome: 'Amorotti' },
    { nome: 'Davie', cognome: 'Caputo' },
    { nome: 'Alessio', cognome: 'Minutoli' }
];

let output = getNomiBuddy(input);
console.log(output); // ['Ilaria', 'Davide', 'Alessio']
