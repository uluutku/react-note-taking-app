import React, { useState } from "react";

const AddNote = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote("");
  };

  return (
    <div className="add-note">
      <h2>Yeni Not Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Notunuzu buraya girin."
        />
        <button type="submit">Not Ekle</button>
      </form>
    </div>
  );
};

export default AddNote;
