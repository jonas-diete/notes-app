const Notes = require('./notesModel');

describe('Notes', () => {
  it('should return an empty array', () => {
    const notes = new Notes();
    expect(notes.getNotes()).toEqual([]);
  })

  it('should return an array with added tasks', () => {
    const notes = new Notes();
    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');
    expect(notes.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('should return an empty array after resetting', () => {
    const notes = new Notes();
    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  })
})