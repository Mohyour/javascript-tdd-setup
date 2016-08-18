
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
        app = new NotesApplication(note)
        assert(app.note_list == [{author: "moyo", content: "note", note_id: "3"}])
    });
    it ("checks if notelist is an array", function() {
        app = new NotesApplication()
        assert(typeof app.note_list() == "object")
    });
})

describe ("Note apllication has the required methods", function(){
    it ("checks if NotesApplication has a create method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication(note)
        assert(app.create)
    });
    it ("checks if NotesApplication has a ListNotes method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication(note)
        assert(app.ListNotes)
    });
    it ("checks if NotesApplication has a get method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication(note)
        assert(app.get)
    });
    it ("checks if NotesApplication has an edit method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication(note)
        assert(app.edit)
    });
    it ("checks if NotesApplication has a delete method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication(note)
        assert(app.delete)
    });
    it ("checks if NotesApplication has a search method", function() {
        note = new Note ("moyo", "note", "3")
        app = new NotesApplication(note)
        assert(app.search)
    });
})
