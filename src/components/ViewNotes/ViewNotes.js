import React from "react";
import "./ViewNotes.css";

function ViewNotes(props) {
  return (
    <div
      className={`view-notes__container ${
        props.note.isOpen ? "view-notes__container_active" : ""
      }`}
    >
      <div className="view-notes__nav">
        <button className="view-notes__button">Редактировать</button>
        <button className="view-notes__button">Удалить</button>
      </div>
      <div className="view-notes__content">
        <h1 className="view-notes__title">{props.note.data.title}</h1>
        <p className="view-notes__text">{props.note.data.text}</p>
      </div>
    </div>
  );
}

export default ViewNotes;
