'use strict'
var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

    describe("Note object was created appropraitely", function() {
        it("assigns author based on entered parameter", function() {
            var note = new Note ("Moyosore", "My notes", "5")
            var app = new NotesApplication()
            assert(note.author == "Moyosore")
        });
        it("assigns content based on entered parameter", function() {
            var note = new Note ("Moyosore", "My notes", "5")
            var app = new NotesApplication()
            assert(note.content == "My notes")
        });
        it("assigns note id based on entered parameter", function() {
            var note = new Note ("Moyosore", "My notes", "5")
            var app = new NotesApplication()
            assert(note.note_id == "5")
        })
    })

    describe ("Note apllication has a note_list array", function(){
        it ("checks if NotesApplication has a notelist", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            app.create(note)
            assert(app.note_list.length == 1)
        });
    })


    describe ("Note apllication has the required methods", function(){
        it ("checks if NotesApplication has a create method", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            assert(app.create)
        });
        it ("checks if NotesApplication has a ListNotes method", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            assert(app.listNotes)
        });
        it ("checks if NotesApplication has a get method", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            assert(app.get)
        });
        it ("checks if NotesApplication has an edit method", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            assert(app.edit)
        });
        it ("checks if NotesApplication has a delete method", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            assert(app.delete)
        });
        it ("checks if NotesApplication has a search method", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            assert(app.search)
        });
    })

    describe ("NoteApllication methods returns the expected outputs", function(){
        it ("checks if create method creates a note", function() {
            var note = new Note ("moyo", "note", "3");
            var app = new NotesApplication();
            assert(app.note_list.length == 0)
            app.create(note)
            assert(app.note_list.length == 1)
        });
        it ("checks if NotesApplication displays lists of notes", function() {
            var note = new Note ("moyo", "note", "3");
            var app = new NotesApplication();
            assert(app.listNotes() == "List of available notes")
        });
        it ("checks if NotesApplication gets a note content", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            app.create(note)
            assert(app.get("3") == "note")
        });
        it ("checks if NotesApplication deletes a note content", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            app.create(note)
            assert(app.note_list.length == 1)
            app.delete("3")
            assert(app.note_list.length == 0)
        });
        it ("checks if NotesApplication edits a note content", function() {
            var note = new Note ("moyo", "note", "3")
            var app = new NotesApplication()
            app.create(note)
            app.edit("3", "new content")
            assert(app.get("3") == "new content")
        });

    })
