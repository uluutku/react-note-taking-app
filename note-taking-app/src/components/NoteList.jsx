import React from "react";
import Note from "./Note";

const NoteList = ({ notes, startEditing, deleteNote }) => {
  return (
    <div className="notes">
      <h2>Notlarım</h2>
      {notes.map((note) => (
        <Note key={note.id} note={note} startEditing={startEditing} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
