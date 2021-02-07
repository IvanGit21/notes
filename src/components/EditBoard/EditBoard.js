import React, { useState, useEffect } from "react";
import "./EditBoard.css";

function EditBoard(props) {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    setInputValue(props.title);
    setTextareaValue(props.text);
  }, [props]);

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handleChangeTextarea(event) {
    setTextareaValue(event.target.value);
  }

  function handleEditClick() {
    props.onEditClick({
      title: inputValue,
      text: textareaValue,
      i: props.i,
    });
  }

  return (
    <div className="edit-board__container">
      <button className="edit-board__button" onClick={handleEditClick}>
        Сохранить
      </button>
      <input
        className="edit-board__input"
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <textarea
        className="edit-board__textarea"
        value={textareaValue}
        onChange={handleChangeTextarea}
      />
    </div>
  );
}

export default EditBoard;
