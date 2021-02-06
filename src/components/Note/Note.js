import React from "react";
import "./Note.css";
import closeIcon from "../../images/close.svg";

function Note({data:{title, text}, i, onDeleteNote}) {

  function handleDeleteClick() {
    onDeleteNote(i)
  }

  return (
    <div className="note__container">
      <img className="note__close-icon" src={closeIcon} alt="close-icon" onClick={handleDeleteClick} />
      <h1 className="note__title">{title}</h1>
      <p className="note__text">{text}</p>
    </div>
  );
}

export default Note;
