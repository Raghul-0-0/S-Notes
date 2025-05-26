const mdb = require('mongoose')

const schema = mdb.Schema(
    {
    noteId : {type: Number, required:true, unique: true},
    noteContent : {type: String, required: false}
    },
    {collection : "test collection 1"}
)

const notesSchema = mdb.model('note',schema);
module.exports = notesSchema;