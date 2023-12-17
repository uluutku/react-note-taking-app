import React, { useState } from "react";

const EditNoteModal = ({ updateNote, editNote, onCancel }) => {
  const [text, setText] = useState(editNote.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(editNote.id, text);
  };

  return (
    <div className="edit-note">
      <h2>Notu Düzenle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="buttons">
          <button type="submit">Kaydet</button>
          <button onClick={onCancel}>İptal</button>
        </div>
      </form>
    </div>
  );
};

export default EditNoteModal;
