import React from "react";
import "./ViewNotes.css";
import EditBoard from "../EditBoard/EditBoard";

function ViewNotes(props) {
  function handleSelectEdit() {
    props.onOpenEdit();
  }

  function handleDeleteClick() {
    props.onDeleteNote(props.note.data.i);
  }

  return (
    <div
      className={`view-notes__container ${
        props.note.isOpen ? "view-notes__container_active" : ""
      }`}
    >
      <div className="view-notes__nav">
        <button className="view-notes__button" onClick={handleSelectEdit}>
          Редактировать
        </button>
        <button className="view-notes__button" onClick={handleDeleteClick}>
          Удалить
        </button>
      </div>
      {props.selectEdit ? (
        <EditBoard
          title={props.note.data.title}
          text={props.note.data.text}
          i={props.note.data.i}
          onEditClick={props.onEditClick}
        />
      ) : (
        <div className="view-notes__content">
          <h1 className="view-notes__title">{props.note.data.title}</h1>
          <p className="view-notes__text">{props.note.data.text}</p>
        </div>
      )}
    </div>
  );
}

export default ViewNotes;
