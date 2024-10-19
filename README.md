[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/HEVN0QSv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16642292&assignment_repo_type=AssignmentRepo)
# README - Dialog Between Emotion and Method | Vera Molnár (1986)

In questo progetto creo un'animazione che disegna una griglia di quadrati concentrici con distorsioni casuali. Ogni cella della griglia ha un colore specifico definito in un array di colori RGB.
La griglia è un **6X6**, ogni cella ha un colore specifico definito dall’array. In ogni cellula ci sono 10 quadrati concentrici, i cui vertici vengono distorti per creare l’effetto desiderato dall’artista.
Il **frame rate** è impostato a 10 FPS per rallentare l'animazione e rendere il movimento più visibile.

## Come funziona il codice

### Variabili Globali

Alcune variabili vengono definite con const e non con let perché non cambiando durante l’esecuzione del codice, ho ritenuto fosse più opportuno usare questa sintassi. 

- `const larg_canvas = 1200;`
  - Definisce la larghezza e l'altezza della tela come 1200x1200 pixel.

- `const colonne = 6;`
  - Definisce il numero di colonne nella griglia.

- `const righe = 6;`
  - Definisce il numero di righe nella griglia.

- `let larg_cella` e `let alt_cella`
  - Queste variabili verranno calcolate dinamicamente in base alle dimensioni della tela. Definiamo queste variabili con `let` poiché i loro valori verranno determinati successivamente nel metodo `setup()`.

- `const colors`
  - Un array bidimensionale che contiene i colori per ciascuna cella in formato RGB. Questo array non cambia, quindi è dichiarato con `const`.

### `setup()`

- La funzione `setup()` viene eseguita una volta all'inizio del programma. Crea una tela di **1200x1200 pixel** e imposta il frame rate a **10 FPS**.
- Calcola la **larghezza** e l'**altezza** di ogni cella della griglia in base alla dimensione della tela e al numero di colonne e righe. Il risultato è salvato in `larg_cella` e `alt_cella`.

### `draw()`

- La funzione `draw()` viene eseguita in loop continuo e ridisegna la griglia.
- Utilizza due cicli `for` annidati per iterare su ogni cella della griglia.
  - Per ogni cella, calcola la sua posizione sulla tela (`Xcella`, `Ycella`).
  - Chiama la funzione `drawCell()` per disegnare i quadrati distorti nella posizione calcolata.

### `drawCell(x, y, colorArray)`

- Disegna 10 quadrati concentrici in una data posizione `(x, y)` con colori presi dall'array RGB `colorArray`.
- Per ogni quadrato, i vertici vengono distorti in modo casuale tramite la funzione `creaPuntoCasualeNelCanvas()`.

### `creaPuntoCasualeNelCanvas(starting_point, offset_livello, randomOffsetRange)`

- Calcola un punto casuale all'interno di un intervallo definito.
- Impedisce che il punto esca dalla tela, aggiustando lo spostamento casuale se necessario.

## Perché `const` invece di `let`?

- **`const larg_canvas`, `colonne`, `righe`, `colors`:** Questi valori non devono mai cambiare durante l'esecuzione del programma. Dichiarandoli con `const`, si garantisce che non vengano accidentalmente modificati, aumentando la sicurezza e leggibilità del codice.
  
- **`let larg_cella`, `alt_cella`:** Queste variabili invece devono essere calcolate durante il `setup()` in base alle dimensioni della tela e quindi possono cambiare, motivo per cui sono dichiarate con `let`.


Buona esplorazione!
