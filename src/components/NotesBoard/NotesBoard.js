import React from "react";
import "./NotesBoard.css";
import Note from "../Note/Note";

function NotesBoard(props) {
  function handleButtonAddClick() {
    props.onButtonAddClick();
  }
  return (
    <div className="board__container">
      <button
        className="board__button_type_add"
        type="submit"
        onClick={handleButtonAddClick}
      >
        +Заметка
      </button>
      <input
        className="board__input"
        type="text"
        name="sort-input"
        placeholder="Поиск..."
      />
      <p className="board__text">Сортировать по возрастанию</p>
      <div className="notes__container">
        <Note />
      </div>
    </div>
  );
}

export default NotesBoard;
