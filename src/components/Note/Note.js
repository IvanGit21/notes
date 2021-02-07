import React from "react";
import "./Note.css";
import closeIcon from "../../images/close.svg";

function Note({ data: { title, text }, i, onDeleteNote, onViewClick }) {
  function handleDeleteClick() {
    onDeleteNote(i);
  }
  function handleViewClick() {
    onViewClick({ title: title, text: text, i: i });
  }

  return (
    <div className="note__container">
      <img
        className="note__close-icon"
        src={closeIcon}
        alt="close-icon"
        onClick={handleDeleteClick}
      />
      <div onClick={handleViewClick}>
        <h1 className="note__title">{title}</h1>
        <p className="note__text">{text}</p>
      </div>
    </div>
  );
}

export default Note;
