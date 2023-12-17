import "./Note.css";
import React from "react";

const Note = ({ note, startEditing, deleteNote }) => {
  return (
    <div className="note" key={note.id}>
      <p>{note.text}</p>
      <div className="buttons">
        <button onClick={() => startEditing(note)}>Düzenle</button>
        <button onClick={() => deleteNote(note.id)}>Sil</button>
      </div>
    </div>
  );
};

export default Note;
