const names = require('./names');
const hobbies = require('./hobbies');

//Crea una funzione che non ha parametri. 
//restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione,
//  usa le tue due funzioni precedenti per costruire l’oggetto.



function getPersonalInfo () {
  let personalInfo = {}
 return personalInfo = {
  'fullName': names('Francesca', 'Lisi'),
  'hobbies': hobbies('moto', 'trekking', 'equitazione')
 }
}

console.log(getPersonalInfo())