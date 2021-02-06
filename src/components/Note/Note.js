import React from "react";
import "./Note.css";
import closeIcon from "../../images/close.svg";

function Note({ data: { title, text }, i, onDeleteNote, onViewClick }) {
  function handleDeleteClick() {
    onDeleteNote(i);
  }
  function handleViewClick() {
    onViewClick({title:title,text:text})
  }

  return (
    <div className="note__container" onClick={handleViewClick}>
      <img
        className="note__close-icon"
        src={closeIcon}
        alt="close-icon"
        onClick={handleDeleteClick}
      />
      <h1 className="note__title">{title}</h1>
      <p className="note__text">{text}</p>
    </div>
  );
}

export default Note;
