// NotesApplication class

module.exports = function() {
    this.note_list = []

    this.create = function(note)  {
        this.note_list.push(note);
        return "Note created"
    }

    this.listNotes = function()  {
        for (var i = 0; i < this.note_list.length; i++) {
            console.log("Note ID: ", this.note_list[i]["note_id"]);
            console.log(this.note_list[i]["content"]);
            console.log(" ");
            console.log("By ", this.note_list[i]["author"]);
            console.log(" ");
        }
        return "List of available notes"
    }

    this.get = function(note_id) {
        for (var i = 0; i < this.note_list.length; i++){
            if(this.note_list[i].note_id == note_id) {
                return this.note_list[i]["content"]
            }
        }
    }

    this.search = function(search_text) {
        console.log('Showing results for', [search_text]);
        for (var i = 0; i < this.note_list.length; i++) {
            if (this.note_list[i]["content"].indexOf(search_text) >= 0) {
            console.log("Note ID: ", this.note_list[i]["note_id"]);
            console.log(this.note_list[i]["content"]);
            console.log(" ");
            console.log("By ", this.note_list[i]["author"]);
            console.log(" ");
            }
        }
    }

    this.delete = function(note_id) {
        for (var i = 0; i < this.note_list.length; i++){
                if(this.note_list[i].note_id == note_id) {
                    this.note_list.splice(this.note_list.indexOf(this.note_list[i]),1)
                    return ("Note deleted");
                }

        }
    }

    this.edit = function(note_id, new_content) {
        for (var i = 0; i < this.note_list.length; i++) {
                if(this.note_list[i].note_id == note_id){
                    this.note_list[i]["content"] = new_content
                    return ("Note content changed");
                }
        }
    }


}

