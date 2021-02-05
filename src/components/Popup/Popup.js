import React from "react";
import "./Popup.css";
import closeIcon from "../../images/close.svg";

function Popup(props) {
  function handleClosePopup() {
    props.onClose();
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
          />
          <textarea
            className="popup__textarea"
            placeholder="Заметка"
          ></textarea>
          <button className="popup__button">Сохранить</button>
        </form>
      </div>
    </div>
  );
}
export default Popup;
