// Lista Cognomi
////////////////////////

// Chiedere all’utente il cognome
var cognomeUtente = prompt('inserisci il tuo cognome');
console.log(cognomeUtente);

// dichiaro array listaCognomi
var listaCognomi = ['rossi', 'bruno', 'pippo', 'caio', 'pinco', 'pallo',  ];
console.log(listaCognomi);

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
listaCognomi.push(cognomeUtente);
listaCognomi = listaCognomi.sort();
console.log(listaCognomi);

// stampa la lista ordinata alfabeticamente
for (var i = 0; i < listaCognomi.length; i++) {
  var contenutoTabella = document.getElementById('tabella_cognomi').innerHTML;
  document.getElementById('tabella_cognomi').innerHTML = contenutoTabella + '<li>' + listaCognomi[i] + '</li>'
}

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
document.getElementById('index').innerHTML = 'il tuo cognome è il numero ' + (listaCognomi.indexOf(cognomeUtente) + 1) +' della lista';
