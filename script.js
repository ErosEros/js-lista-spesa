// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
// gli elementi della lista individualmente con un ciclo while.

// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

const lista = ['pane','latte','acqua','carne','formaggi','verdure','pasta','pesce','frutta']
let contatore = 0
const spesa = document.querySelector('.spesa')

while(contatore < lista.length) {
    
    console.log(lista[contatore])
    contatore++
}