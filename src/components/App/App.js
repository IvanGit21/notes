import React, { useState, useEffect } from "react";
import "./App.css";
import NotesBoard from "../NotesBoard/NotesBoard";
import Popup from "../Popup/Popup";
import ViewNotes from "../ViewNotes/ViewNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const [filterNotes, setFilterNotes] = useState([]);

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

  const [searchValue, setSearhValue] = useState("");

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      const storeNotes = JSON.parse(localStorage.getItem("notes"));
      setNotes(storeNotes);
    } else {
      localStorage.setItem("notes", []);
      setNotes([]);
    }
  }, []);

  function handleSearchNotes(event) {
    const data = event.target.value;
    setSearhValue(data);
    const newArr = searchNote(data);
    setFilterNotes(newArr);
  }

  function searchNote(data) {
    return notes.filter((el, i) => {
      return el.title.includes(data);
    });
  }

  function handleChangeSelectSort(event) {
    setValue(event.target.value);
    setNotes(sortList(event.target.value));
  }

  function sortList(val) {
    if (val === "descending") {
      return notes.sort((obj1, obj2) => {
        return new Date(obj2.date) - new Date(obj1.date);
      });
    } else if (val === "ascending") {
      return notes.sort((obj1, obj2) => {
        return new Date(obj1.date) - new Date(obj2.date);
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
    localStorage.setItem("notes", JSON.stringify([...notes, data]));
  }

  function handleDeleteFilterNote(index) {
    const newNotes = filterNotes.filter((el, i) => {
      return notes[index] !== notes[i];
    });
    setFilterNotes(newNotes);
  }

  function handleDeleteNote(index) {
    const newNotes = notes.filter((el, i) => {
      return notes[index] !== notes[i];
    });
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    handleDeleteFilterNote(index);
    setSelectNote({
      isOpen: false,
      data: {
        title: "",
        text: "",
        i: "",
        date: "",
      },
    });
  }

  function handleViewClick({ title, text, i, date }) {
    setSelectNote({
      isOpen: true,
      data: { title, text, i, date },
    });
  }
  function handleEditClickFilterNotes(data) {
    const newNotes = filterNotes.filter((el, index) => {
      return notes[data.i] !== notes[index];
    });
    let newNote = filterNotes.filter((el, index) => {
      return notes[data.i] === notes[index];
    });
    newNote = data;
    setFilterNotes([...newNotes, newNote]);
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
    localStorage.setItem("notes", JSON.stringify([...newNotes, newNote]));
    handleEditClickFilterNotes(data);
    setSelectEdit(false);
    setSelectNote({
      isOpen: true,
      data: {
        title: data.title,
        text: data.text,
        i: data.i,
        date: data.date,
      },
    });
  }

  function handleSelectEdit() {
    setSelectEdit(true);
  }

  function selectNotes() {
    if (searchValue) {
      return filterNotes;
    } else {
      return notes;
    }
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
          notes={selectNotes()}
          value={value}
          searchValue={searchValue}
          handleChange={handleChangeSelectSort}
          onButtonAddClick={handleButtonAddClick}
          onDeleteNote={handleDeleteNote}
          onViewClick={handleViewClick}
          onSearchNotes={handleSearchNotes}
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
