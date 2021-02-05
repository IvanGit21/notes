import React, { useState } from "react";
import "./App.css";
import NotesBoard from "../NotesBoard/NotesBoard";
import Popup from "../Popup/Popup";

function App() {
  const [isAddNotePopup, setIsAddNotePopup] = useState(false);

  function closePopupAddNote() {
    setIsAddNotePopup(false);
  }
  function handleButtonAddClick(){
    setIsAddNotePopup(true); 
  }

  return (
    <>
      <Popup isOpen={isAddNotePopup} onClose={closePopupAddNote} />
      <div className="app-container">
        <NotesBoard onButtonAddClick={handleButtonAddClick}/>
      </div>
    </>
  );
}
export default App;
