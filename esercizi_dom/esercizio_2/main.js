let playlist = {
    canzoni: [],
    aggiungiCanzone: function(titolo, autore) {
        let nuovaCanzone = { titolo: titolo, autore: autore };
        this.canzoni.push(nuovaCanzone);
    }
};

// Esempio di utilizzo dell'oggetto
playlist.aggiungiCanzone('Comfortably Numb', 'Pink Floyd');
playlist.aggiungiCanzone('Nothing Else Matters', 'Metallica');

console.log(playlist.canzoni);
/*
Output:
[
    { titolo: 'Comfortably Numb', autore: 'Pink Floyd' },
    { titolo: 'Nothing Else Matters', autore: 'Metallica' }
]
*/
