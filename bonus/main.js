// dichiaro array
var elencoNomi = ['zorro', 'mario', 'edoardo', 'gianni', 'fabio', 'rafaele', 'carlo'];

var n = elencoNomi.length;
while (n !== 0) {
  var stop = 0;
  for (var i = 1; i < elencoNomi.length; i++) {
    // confronto un item con la sua precedente per vedere se è minore
    if (elencoNomi[i] < elencoNomi[i - 1]) {
      // se è minore la salvo in una variabile temporanea
      var boxTemporaneo = elencoNomi[i];
      // l'item prende il posto del suo precedente
      elencoNomi[i] = elencoNomi[i - 1];
      // e l'item precedente prende il valore della variabile temporanea
      elencoNomi[i - 1] = boxTemporaneo;
      console.log(elencoNomi);
      position = i;
      console.log(stop);
    }
  }
  n = position;
}
