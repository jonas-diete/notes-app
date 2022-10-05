const Notes = require('./notesModel');
const notes = new Notes();
notes.addNote('Find cardboard.');

console.log('The notes app is running.');
console.log('The current list is: ' + notes.getNotes());
