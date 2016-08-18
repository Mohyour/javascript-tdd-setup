
var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note object was created appropraitely", function() {
    it("assigns content based on entered parameter", function() {
        var note = new Note("Moyosore", "My notes", "5")
        assert(note.author == "Moyosore")
    });
    it("assigns content based on entered parameter", function() {
        var note = new Note("Moyosore", "My notes", "5")
        assert(note.content == "My notes")
    });
    it("assigns note id based on entered parameter", function() {
        var note = new Note("Moyosore", "My notes", "7")
        assert(note.note_id == "7")
    })
})

describe ("Note apllication has a note_list array", function(){
    it ("checks if NotesApplication has a notelist", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        app.create(note)
        assert(app.note_list)
    });
    it ("checks if notelist is an array", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        app.create(note)
        app.note_list
        assert(typeof app.note_list == "object")
    });
})


describe ("Note apllication has the required methods", function(){
    it ("checks if NotesApplication has a create method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        assert(app.create)
    });
    it ("checks if NotesApplication has a ListNotes method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        assert(app.listNotes)
    });
    it ("checks if NotesApplication has a get method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        assert(app.get)
    });
    it ("checks if NotesApplication has an edit method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        assert(app.edit)
    });
    it ("checks if NotesApplication has a delete method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        assert(app.delete)
    });
    it ("checks if NotesApplication has a search method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        assert(app.search)
    });
})

describe ("NoteApllication methods returns the expected outputs", function(){
    it ("checks if create method creates a note", function() {
        note = new Note ("moyo", "note", "3");
        app = new NotesApplication();
        app.create(note)
        assert(app.create(note) == "Note created")
    });
    it ("checks if NotesApplication displays lists of notes", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        app.create(note)
        assert(app.listNotes() == "List of available notes")
    });
    it ("checks if NotesApplication gets a note content", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        app.create(note)
        assert(app.get("3") == "note")
    });
    it ("checks if NotesApplication deletes a note content", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        app.create(note)
        assert(app.delete("3") == "Note deleted")
    });
    it ("checks if NotesApplication edits a note content", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication()
        app.create(note)
        assert(app.edit("3", "new content") == "Note content changed")
    });

})
