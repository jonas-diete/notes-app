class Notes {
  constructor() {
    this.list = [];
  };

  getNotes() {
    return this.list;
  };

  addNote(task) {
    this.list.push(task);
  }

  reset() {
    this.list = [];
  }
};

module.exports = Notes;