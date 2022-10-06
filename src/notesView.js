class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel;

    const addButtonEl = document.querySelector('#add-button');
    const inputEl = document.querySelector('#user-input');
    addButtonEl.addEventListener('click', () => {
      this.notesModel.addNote(inputEl.value);
      inputEl.value = '';
      this.removeNotes();
      this.displayNotes();
    });
  };

  displayNotes() {
    const notes = this.notesModel.getNotes();
    notes.forEach(note => {
      let div = document.createElement('div');
      div.textContent = note;
      div.className = 'note';
      let main = document.querySelector('#main-container');
      main.append(div);
    });
  };

  removeNotes() {
    let notesElements = document.querySelectorAll('div.note');
    notesElements.forEach(noteEl => {
      noteEl.remove();
    });
  };
};

module.exports = NotesView;