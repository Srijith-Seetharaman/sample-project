const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  const notesArray = loadNotes();
  notesArray.forEach((singleNote, index) =>
    console.log(
      `Note ${index + 1}: Note title: ${singleNote.title}, Note body: ${
        singleNote.body
      }\n`
    )
  );
  return 1;
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(
    (singleNote) => singleNote.title === title
  );
  if (duplicateNotes.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green(`New note added successfully.`));
  } else {
    console.log(chalk.red(`Note with same title found.`));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataBuffer = JSON.parse(fs.readFileSync("./notes.json").toString());
    return dataBuffer;
  } catch (e) {
    return [];
  }
};

const deleteNotes = (title) => {
  const notesArray = loadNotes();
  // console.log(notesArray);
  const notesToKeep = notesArray.filter(
    (singleNote) => singleNote.title !== title
  );
  if (notesToKeep.length === notesArray.length) {
    console.error(chalk.red(`Note with the title "${title}" not present`));
  } else {
    fs.writeFileSync("./notes.json", JSON.stringify(notesToKeep));
    console.log(chalk.green(`Note successfully deleted.`));
  }
};

const getANote = (title) => {
  const notesArray = loadNotes();
  let returnedNote = [];
  returnedNote = notesArray.filter((note) => note.title === title && note);
  if (returnedNote.length === 0) {
    console.log(chalk.red(`No note found with the title ${title}.`));
  } else {
    returnedNote.forEach((note) =>
      console.log(
        chalk.green(`Note title: ${note.title}, Note body: ${note.body}.\n`)
      )
    );
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  deleteNotes: deleteNotes,
  getANote: getANote,
};
