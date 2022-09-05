// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
// gli elementi della lista individualmente con un ciclo while.

// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// dichiaro gli array nella variabile lista
const lista = ['pane','latte','acqua','carne','formaggi','verdure','pasta','pesce','frutta']
// contatore
let contatore = 0
// vado a prendere con il selettore la classe .spesa
const spesa = document.querySelector('.spesa')

// dichiaro la condizione nel ciclo while
while(contatore < lista.length) {
    
    console.log(lista[contatore])

    // stampo la lista della spesa in un div nell html
    spesa.innerHTML +=  '<div>' + lista[contatore] + '</div>'

    // determino la fine del ciclo
    contatore++
}
