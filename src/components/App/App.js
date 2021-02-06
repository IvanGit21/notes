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
    isOpen:false,
    data:{
      title:"",
      text:""
    }
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
  }

  function handleViewClick({title,text}) {
    setSelectNote({
      isOpen:true,
      data:{title,text}
    })
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
        <ViewNotes note={selectNote}/>
      </div>
    </>
  );
}
export default App;
