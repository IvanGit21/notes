import React from "react";
import "./NotesBoard.css";
import Note from "../Note/Note";
import SelectSort from "../SelectSort/SelectSort";

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
      <p className="board__text">
        Сортировать по{" "}
        {<SelectSort value={props.value} handleChange={props.handleChange} />}
      </p>
      <div className="notes__container">
        {props.notes.map((el, i) => {
          return (
            <Note
              data={el}
              i={i}
              key={i}
              onDeleteNote={props.onDeleteNote}
              onViewClick={props.onViewClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotesBoard; 
