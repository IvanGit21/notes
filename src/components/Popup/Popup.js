import React, { useState } from "react";
import "./Popup.css";
import closeIcon from "../../images/close.svg";

function Popup(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleClosePopup() {
    props.onClose();
  }

  function handleChangeOnInputTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeOnInputText(event) {
    setText(event.target.value);
  }

  function resetInput() {
    setTitle("");
    setText("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit({ title: title, text: text, date:new Date() });
    props.onClose();
    resetInput();
  }

  return (
    <div className={`popup ${props.isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <form className="popup__form">
          <img
            src={closeIcon}
            alt="close-icon"
            className="popup__close-icon"
            onClick={handleClosePopup}
          />
          <input
            className="popup__input"
            type="text"
            name="title"
            placeholder="Заголовок"
            value={title}
            onChange={handleChangeOnInputTitle}
          />
          <textarea
            className="popup__textarea"
            placeholder="Заметка"
            value={text}
            onChange={handleChangeOnInputText}
          ></textarea>
          <button className="popup__button" onClick={handleSubmit}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
export default Popup;
