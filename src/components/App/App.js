import React, { useState } from "react";
import "./App.css";
import NotesBoard from "../NotesBoard/NotesBoard";
import Popup from "../Popup/Popup";
import ViewNotes from "../ViewNotes/ViewNotes";

function App() {
  const [notes, setNotes] = useState([
    { title: "title 1", text: "text 1", date: new Date() },
    { title: "title 2", text: "text 2", date: new Date() },
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
  const [selectEdit, setSelectEdit] = useState(false);

  const [value, setValue] = useState("ascending");

  function handleChangeSelectSort(event) {
    setValue(event.target.value);
    setNotes(sortList());
  }

  function sortList() {
    if (value === "descending") {
      return notes.sort((obj1, obj2) => {
        return obj1.date - obj2.date;
      });
    } else if (value === "ascending") {
      return notes.sort((obj1, obj2) => {
        return obj2.date - obj1.date;
      });
    } else {
      return notes;
    }
  }

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
    setSelectNote({
      isOpen: false,
      data: {
        title: "",
        text: "",
        i: "",
      },
    });
  }

  function handleViewClick({ title, text, i }) {
    setSelectNote({
      isOpen: true,
      data: { title, text, i },
    });
  }

  function handleEditClick(data) {
    const newNotes = notes.filter((el, index) => {
      return notes[data.i] !== notes[index];
    });
    let newNote = notes.filter((el, index) => {
      return notes[data.i] === notes[index];
    });
    newNote = data;
    setNotes([...newNotes, newNote]);
    setSelectEdit(false);
    setSelectNote({
      isOpen: true,
      data: {
        title: data.title,
        text: data.text,
        i: data.i,
      },
    });
  }

  function handleSelectEdit() {
    setSelectEdit(true);
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
          notes={notes}
          value={value}
          handleChange={handleChangeSelectSort}
          onButtonAddClick={handleButtonAddClick}
          onDeleteNote={handleDeleteNote}
          onViewClick={handleViewClick}
        />
        <ViewNotes
          note={selectNote}
          onDeleteNote={handleDeleteNote}
          onEditClick={handleEditClick}
          selectEdit={selectEdit}
          onOpenEdit={handleSelectEdit}
        />
      </div>
    </>
  );
}
export default App;
