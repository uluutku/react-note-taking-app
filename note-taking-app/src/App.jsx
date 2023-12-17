import React, { useState } from 'react';
import Footer from './components/Footer';
import "./Theme.css";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import EditNoteModal from "./components/EditNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const addNote = (text) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const startEditing = (note) => {
    setEditNote(note);
  };

  const updateNote = (id, text) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text } : note
    );
    setNotes(updatedNotes);
    setEditNote(null);
  };

  return (
    <div className="app-wrapper">
      <div className="app">
        <h1>React Not Uygulaması</h1>
        <div className="note-section">
          <NoteList notes={notes} startEditing={startEditing} deleteNote={deleteNote} />
          <AddNote addNote={addNote} />
        </div>

        {editNote && (
          <EditNoteModal
            updateNote={updateNote}
            editNote={editNote}
            onCancel={() => setEditNote(null)}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
