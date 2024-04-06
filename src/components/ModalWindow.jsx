import React from "react";

import '../style/ModalWindow.css'

const ModalWindow = ({ onClose }) => {
    return (
        <div className="modal-window">
          <div className="modal-header">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form>
                <div className="modal-form">
                    <label htmlFor="name">Название</label>
                    <input type="text" id="name" />

                    <label htmlFor="name">Название</label>
                    <select>
                        {/* Тут крч над крутую штуку сделать */}
                    </select>
                
        
                    <button>Добавить</button>
                </div>
            </form>
          </div>
        </div>
      );
  };


export default ModalWindow;

