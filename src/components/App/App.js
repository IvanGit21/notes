import React, { useState } from "react";
import "./App.css";
import NotesBoard from "../NotesBoard/NotesBoard";
import Popup from "../Popup/Popup";
import ViewNotes from "../ViewNotes/ViewNotes";

function App() {
  const [notes, setNotes] = useState([
    { title: "title 1", text: "text 1" },
    { title: "title 2", text: "text 2" },
  ]);
  const [isAddNotePopup, setIsAddNotePopup] = useState(false);

  const [selectNote, setSelectNote] = useState({
    isOpen: false,
    data: {
      title: "",
      text: "",
      i: "",
    },
  });

  function closePopupAddNote() {
    setIsAddNotePopup(false);
  }
  function handleButtonAddClick() {
    setIsAddNotePopup(true);
  }
  function handleSubmitNotes(data) {
    setNotes([...notes, data]);
  }


  function handleDeleteNote(index) {
    const newNotes = notes.filter((el, i) => {
      return notes[index] !== notes[i];
    });
    setNotes(newNotes);
    setSelectNote(({
      isOpen: false,
      data: {
        title: "",
        text: "",
        i: "",
      },
    }));
  }

  function handleViewClick({ title, text, i }) {
    setSelectNote({
      isOpen: true,
      data: { title, text, i },
    });
  }

  return (
    <>
      <Popup
        isOpen={isAddNotePopup}
        onClose={closePopupAddNote}
        onSubmit={handleSubmitNotes}
      />
      <div className="app-container">
        <NotesBoard
          onButtonAddClick={handleButtonAddClick}
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onViewClick={handleViewClick}
        />
        <ViewNotes note={selectNote} onDeleteNote={handleDeleteNote} />
      </div>
    </>
  );
}
export default App;
