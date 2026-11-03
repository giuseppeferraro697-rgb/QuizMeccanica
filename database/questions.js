/*
 * DATABASE DOMANDE — Quiz a crocette (FM)
 * ------------------------------------------------------------------
 * Struttura: DATA = [ capitolo, capitolo, ... ]
 *
 * CAPITOLO
 *   code   codice UNIVOCO (non cambiarlo dopo l'uso: è la chiave dei badge su Firestore)
 *   title  titolo mostrato nella Home
 *   q      elenco delle domande
 *
 * DOMANDA
 *   s     testo della domanda (gli "a capo" \n vengono mantenuti)
 *   o     opzioni di risposta (l'ordine è SEMPRE quello scritto qui; di norma 4–5)
 *   a     indice della risposta ESATTA in "o" (parte da 0: 0 = prima opzione)
 *   img   (opzionale) percorso di un'immagine mostrata tra il testo e le opzioni,
 *         es.  img: "./images/grafico1.jpg"
 *
 * Per aggiungere una domanda: copia un blocco { ... } dentro "q" del capitolo
 * giusto e ricordati la virgola tra i blocchi. Gli id interni
 * (codiceCapitolo.posizione) sono generati da index.html.
 *
 * NOTA: le risposte riportano i segni di correzione presenti nel PDF di origine
 * ("Teoria Crocette FM"). Nelle domande "quale affermazione è errata" l'opzione
 * "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte
 * siano corrette" è una scelta valida come le altre.
 */

export const DATA = [

  // ═══════════════════════════════════════════════════════════════
  // FM1 — Analisi Strutturale (Gradi di libertà, Accoppiamenti, Gruppi di Assur)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "FM1",
    title: "Accoppiamenti cinematici e meccanismi piani",
    q: [
      // FM1 #1
         {
        s: "Dato il meccanismo mostrato in figura, calcolarne mediante l'equazione di Grübler il numero di gradi di libertà (n), indicando esplicitamente il numero di membri (m), incluso il telaio ed eventuali membri degeneri, ed il numero di coppie di classe 1 (C).",
        img: "./images/grubler_es1.jpeg", 
        type: "multi-slot",
        slots: [
          { 
            label: "n =", 
            o: ["0", "1", "2", "3"], 
            a: 3 // L'indice 1 corrisponde al valore "1"
          },
          { 
            label: "m =", 
            o: ["3", "4", "5", "6"], 
            a: 3 // L'indice 1 corrisponde al valore "4"
          },
          { 
            label: "C =", 
            o: ["3", "4", "5", "6"], 
            a: 3 // L'indice 2 corrisponde al valore "5"
          }
        ]
      },
      // FM1 #2
      {
        s: "Quale affermazione è errata tra quelle riportate sotto, riferite alla soluzione analitica del problema di posizione di una diade di quinta specie?",
        o: [
          "L'angolo α è noto", // 0
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 1  ← corretta
          "La posizione del pattino A è incognita", // 2
          "La lunghezza BC è nota", // 3
          "L'angolo β è noto", // 4
        ],
        a: 1,
      },
      // FM1 #3
      {
        s: "Con riferimento ad un accoppiamento cinematico di tipo camma piana, quale delle seguenti affermazioni è errata?",
        o: [
          "È un accoppiamento cinematico superiore, poiché il contatto tra le superfici coniugate è un contatto di superficie", // 0  ← corretta
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 1
          "Vi è un'unica componente di forza scambiata tra le superfici coniugate ed è ortogonale alle superfici nel punto di contatto", // 2
          "È un accoppiamento cinematico di classe due poiché impedisce un grado di libertà di traslazione del moto relativo", // 3
          "Può essere realizzato mediante accoppiamento di forma o accoppiamento di forza", // 4
        ],
        a: 0,
      },
      // FM1 #4
      {
        s: "Con riferimento ai meccanismi piani, quale delle seguenti affermazioni è errata?",
        o: [
          "Tutti i meccanismi composti solo da accoppiamenti rotoidali, prismatici e/o a camma piana sono piani", // 0
          "I membri possono giacere su piani differenti purché paralleli", // 1
          "Sono meccanismi nei quali tutti i membri si muovono parallelamente ad un unico piano", // 2
          "Possono avere più di due gradi di libertà", // 3  ← corretta
          "Scegliere questa opzione se si ritiene che tutte le affermazioni proposte siano corrette", // 4
        ],
        a: 3,
      },
      // FM1 #5
      {
        s: "Con riferimento ai Gruppi di Assur, quale delle seguenti affermazioni è errata?",
        o: [
          "L'aggiunta di un Gruppo di Assur ad un meccanismo non ne altera il numero di gradi di libertà", // 0
          "I Gruppi di Assur di tipo triade e tetrade hanno lo stesso numero di membri", // 1
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 2  ← corretta
          "I Gruppi di Assur di tipo diade derivano da meccanismi con tre membri e tre accoppiamenti di classe 1", // 3
          "La scomposizione di un meccanismo in Gruppi di Assur consente di semplificare la soluzione del problema cinematico di posizione", // 4
        ],
        a: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // FM2 — Analisi cinematica e dinamica dei sistemi articolati  (7 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "FM2",
    title: "Analisi cinematica e dinamica dei sistemi articolati",
    q: [
      // FM2 #1
      {
        s: "Con riferimento all'analisi di velocità di un sistema articolato piano, quale delle seguenti affermazioni è errata?",
        o: [
          "La velocità di un qualsiasi membro dipende non solo dalla velocità delle coordinate libere ma anche dalla posizione del meccanismo", // 0
          "La velocità di un qualsiasi membro si può esprimere come combinazione lineare delle velocità delle coordinate libere", // 1
          "La velocità di un qualsiasi membro è sicuramente nulla se le velocità di tutte le coordinate libere del meccanismo sono nulle", // 2
          "I coefficienti di sensibilità sono definiti come i rapporti tra le velocità incognite e le velocità delle coordinate libere", // 3  ← corretta
        ],
        a: 3,
      },
      // FM2 #2
      {
        s: "Con riferimento alla matrice Jacobiana di un sistema articolato piano, quale delle seguenti affermazioni è errata?",
        o: [
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 0  ← corretta
          "È la matrice dei coefficienti delle incognite del problema di velocità", // 1
          "È la matrice delle derivate parziali delle equazioni di chiusura di posizione calcolate rispetto alle incognite", // 2
          "È la matrice la cui inversa è utilizzata nello schema iterativo di Newton-Raphson per la soluzione del problema di posizione", // 3
          "Le configurazioni che portano all'annullamento del determinante della matrice Jacobiana sono dette configurazioni singolari", // 4
        ],
        a: 0,
      },
      // FM2 #3
      {
        s: "Con riferimento alle configurazioni singolari di un sistema articolato piano, quale delle seguenti affermazioni è errata?",
        o: [
          "Le configurazioni singolari di un meccanismo possono essere studiate verificando dove si annulla il determinante della matrice Jacobiana", // 0
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 1  ← corretta
          "Quando un meccanismo è in una configurazione singolare non è possibile risolvere il problema cinematico di velocità", // 2
          "Una configurazione è singolare in relazione alla scelta della coordinata libera e non in assoluto", // 3
          "L'attraversamento di una configurazione singolare può portare alla rottura del meccanismo", // 4
        ],
        a: 1,
      },
      // FM2 #4
      {
        s: "Quale delle seguenti affermazioni relative all'analisi dinamica dei sistemi articolati piani con approccio Newtoniano è scorretta?",
        o: [
          "In caso di equilibrio statico, il polo rispetto al quale calcolare i momenti delle forze può essere scelto arbitrariamente", // 0
          "Per un qualsiasi corpo del sistema è possibile scrivere due equazioni scalari di equilibrio di tutte le componenti delle forze che agiscono dall'esterno sul corpo", // 1
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 2
          "In caso di equilibrio dinamico, il polo rispetto al quale calcolare i momenti delle forze deve coincidere con il centro di massa del corpo", // 3  ← corretta
          "Per un qualsiasi corpo del sistema è possibile scrivere un'equazione scalare di equilibrio dei momenti di tutte le forze che agiscono dall'esterno sul corpo", // 4
        ],
        a: 3,
      },
      // FM2 #5
      {
        s: "Con riferimento all'analisi di accelerazione di un sistema articolato piano, quale delle seguenti affermazioni è errata?",
        o: [
          "L'accelerazione di un qualsiasi membro è nulla se le accelerazioni delle coordinate libere sono tutte nulle", // 0  ← corretta
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 1
          "L'accelerazione di un qualsiasi membro in generale non è nulla se le accelerazioni delle coordinate libere sono tutte nulle", // 2
          "L'accelerazione di un qualsiasi membro può essere nulla se le accelerazioni delle coordinate libere sono tutte nulle", // 3
          "L'accelerazione di un qualsiasi membro dipende dalle accelerazioni delle coordinate libere", // 4
        ],
        a: 0,
      },
      // FM2 #6
      {
        s: "Con riferimento ai termini di accelerazione di un vettore del poligono di chiusura di un sistema articolato, quale delle seguenti affermazioni è errata?",
        o: [
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 0  ← corretta
          "L'accelerazione centripeta ha la stessa direzione dell'accelerazione relativa o lineare", // 1
          "L'accelerazione centripeta è proporzionale al quadrato della velocità angolare", // 2
          "L'accelerazione angolare ha la stessa direzione della velocità angolare", // 3
          "L'accelerazione di Coriolis è proporzionale alla velocità lineare ed alla velocità angolare", // 4
        ],
        a: 0,
      },
      // FM2 #7
      {
        s: "Con riferimento alle configurazioni singolari di un sistema articolato piano, quale delle seguenti affermazioni è errata?",
        o: [
          "Le configurazioni singolari di un meccanismo possono essere studiate verificando dove si annulla il determinante della matrice Jacobiana", // 0
          "Quando un meccanismo è in una configurazione singolare non è possibile risolvere il problema cinematico di velocità", // 1
          "Una configurazione è singolare in relazione alla scelta della coordinata libera e non in assoluto", // 2
          "Ogni meccanismo ha una ed una sola configurazione singolare", // 3  ← corretta
          "Scegliere questa risposta se si ritiene che tutte le affermazioni proposte siano corrette", // 4
        ],
        a: 3,
      },
    ],
  },
];
