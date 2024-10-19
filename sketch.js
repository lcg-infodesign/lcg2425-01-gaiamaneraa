const larg_canvas = 1200;  // Dimensione della tela (1200x1200 pixel)
const colonne = 6;  // Numero di colonne nella griglia
const righe = 6;    // Numero di righe nella griglia
let larg_cella;     // Variabile per la larghezza di ogni cella
let alt_cella;      // Variabile per l'altezza di ogni cella

// Array di colori (in formato RGB) per ciascuna cella della griglia
const colors = [
  [ // Riga 0
    [0,255,255],   // ciano
    [255, 0, 255],  // magenta
    [255, 0, 255],  // magenta    
    [0, 100,0],  // verde scuro
    [0, 0, 153],  // blu scuro
    [0, 0, 153],  // blu scuro
  ],
  [ // Riga 1
    [255, 255, 0],    // giallo
    [255, 255, 255],  // bianco
    [0, 0, 153],      // blu scuro
    [255, 0, 0],      // rosso
    [255, 0, 255],    // magenta    
    [255, 255, 0],    // giallo
  ],
  [ // Riga 2
    [255, 255, 255],  // bianco
    [255, 255, 0],    // giallo
    [255, 255, 255],  // bianco
    [255, 255, 0],    // giallo
    [0, 0, 153],      // blu scuro
    [255, 0, 0],      // rosso
  ],
  [ // Riga 3
    [0,255,255],      // ciano
    [255, 255, 255],  // bianco
    [255, 255, 0],    // giallo
    [255, 0, 0],      // rosso
    [255, 255, 0],    // giallo
    [255, 255, 255],  // bianco
  ],
  [ // Riga 4
    [255, 0, 255],    // magenta 
    [0, 0, 153],      // blu scuro
    [0, 0, 153],      // blu scuro
    [0, 0, 153],      // blu scuro
    [0, 100,0],       // verde scuro
    [0, 0, 153],      // blu scuro
  ],
  [ // Riga 5
    [255, 0, 0],      // rosso
    [0, 100,0],       // verde scuro
    [255, 0, 255],    // magenta 
    [0, 0, 153],      // blu scuro
    [0,255,255],      // ciano
    [0,255,255],      // ciano
  ]
];

function setup() {
  createCanvas(larg_canvas, larg_canvas);  // Crea una tela di 1200x1200 pixel

  frameRate(10);  // Imposta il frame rate a 10 FPS (per rallentare l'animazione)

  // Calcola la larghezza e l'altezza di ogni cella
  larg_cella = width / colonne;
  alt_cella = height / righe;

  noFill();  // Disabilita il riempimento delle forme
}

function draw() {
  background(0);  // Imposta lo sfondo a nero

  // Cicli annidati per scorrere ogni cella della griglia
  for (let c = 0; c < colonne; c++) {
    for (let r = 0; r < righe; r++) {
      // Calcola la posizione (x, y) della cella
      const Xcella = c * larg_cella;
      const Ycella = r * alt_cella;

      // Disegna la cella alla posizione (Xcella, Ycella) con il colore corrispondente
      drawCell(Xcella, Ycella, colors[r][c]);  // Passa il colore della cella
    }
  }
}

function drawCell(x, y, colorArray) {
  noFill();  // Rimuove il riempimento
  strokeWeight(2);  // Imposta uno spessore di 2 pixel per il bordo

  const squareCount = 10;  // Numero di quadrati concentrici
  const randomOffset = 50;  // Offset casuale per distorcere i quadrati

  // Disegna 10 quadrati concentrici con distorsioni casuali
  for (let i = 1; i <= squareCount; i++) {
    const offset_livello = 5 * i;  // Definisce l'offset per ogni livello

    // Calcola le coordinate dei vertici con distorsioni casuali
    const xuno = creaPuntoCasualeNelCanvas(x, offset_livello, randomOffset);
    const yuno = creaPuntoCasualeNelCanvas(y, offset_livello, randomOffset);

    const xdue = creaPuntoCasualeNelCanvas(x + larg_cella, -offset_livello, randomOffset);
    const ydue = creaPuntoCasualeNelCanvas(y, offset_livello, randomOffset);

    const xtre = creaPuntoCasualeNelCanvas(x + larg_cella, -offset_livello, randomOffset);
    const ytre = creaPuntoCasualeNelCanvas(y + alt_cella, -offset_livello, randomOffset);

    const xquattro = creaPuntoCasualeNelCanvas(x, offset_livello, randomOffset);
    const yquattro = creaPuntoCasualeNelCanvas(y + alt_cella, -offset_livello, randomOffset);

    // Imposta il colore del bordo usando l'array RGB fornito
    stroke(colorArray[0], colorArray[1], colorArray[2]);

    // Disegna il quadrilatero con i vertici calcolati
    quad(xuno, yuno, xdue, ydue, xtre, ytre, xquattro, yquattro);
  }
}

// Funzione per generare un punto casuale con uno spostamento all'interno della tela
function creaPuntoCasualeNelCanvas(starting_point, offset_livello, randomOffsetRange) {
  // Crea uno spostamento casuale nell'intervallo definito
  let randomOffset = random(-randomOffsetRange, randomOffsetRange);
  
  // Limita lo spostamento per evitare che i punti escano dalla tela
  if (starting_point + offset_livello + randomOffset < 0) {
    randomOffset = -starting_point - offset_livello;
  }
  if (starting_point + offset_livello + randomOffset > larg_canvas) {
    randomOffset = larg_canvas - starting_point - offset_livello;
  }

  // Restituisce il punto iniziale più lo spostamento casuale
  return starting_point + offset_livello + randomOffset;
}
