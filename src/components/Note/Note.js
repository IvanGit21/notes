import React from "react";
import "./Note.css";
import closeIcon from "../../images/close.svg";

function Note({ data: { title, text, date }, i, onDeleteNote, onViewClick }) {
  function handleDeleteClick() {
    onDeleteNote(i);
  }
  function handleViewClick() {
    onViewClick({ title: title, text: text, i: i, date:date });
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
        <h3 className="note__title">{title}</h3>
        <p className="note__text">{text}</p>
      </div>
    </div>
  );
}

export default Note;
