/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const Notes = require('./notesModel');
const fs = require('fs');

describe('Testing what is displayed on the website', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('tests if one note div elements was created', () => {
    const notes = new Notes();
    notes.addNote('Buy milk');
    const view = new NotesView(notes);
    view.displayNotes();
    expect(document.querySelector('div.note').textContent).toBe('Buy milk');
  });

  it('tests if multiple new note div elements were created', () => {
    const notes = new Notes();
    notes.addNote('Buy milk');
    notes.addNote('Order lunch');
    notes.addNote('Prepare space rockets');
    const view = new NotesView(notes);
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(3);
  });

  it('tests if an input by the user is created as a note and displayed on the page', () => {
    const notes = new Notes();
    const view = new NotesView(notes);
    const inputEl = document.querySelector('#user-input');
    inputEl.value = 'Make Pizza';
    const addButtonEl = document.querySelector('#add-button');
    addButtonEl.click();
    expect(document.querySelector('div.note').textContent).toBe('Make Pizza');
    expect(document.querySelectorAll('div.note').length).toBe(1);
  });

  it ('removes all the notesElements on the website', () => {
    const notes = new Notes();
    notes.addNote('Buy milk');
    notes.addNote('Order lunch');
    notes.addNote('Prepare space rockets');
    const view = new NotesView(notes);
    view.displayNotes();
    view.removeNotes();
    expect(document.querySelectorAll('div.note').length).toBe(0);
  });
});
