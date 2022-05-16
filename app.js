const chalk = require("chalk");

const yargs = require("yargs");

const notes = require("./notes.js");

yargs.version("2.3.1");

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "The title of the note that has to be deleted",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.deleteNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "List all existing notes",
  handler: () => {
    notes.getNotes();
  },
});

yargs.command({
  command: "read",
  description: "Read the specified note",
  builder: {
    title: {
      describe: "The title of the note you want",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.getANote(argv.title);
  },
});

// add, remove,read, list

// create add object

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "The note you want to add",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.parse();
