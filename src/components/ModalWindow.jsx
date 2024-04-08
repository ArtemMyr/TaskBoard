import React,{ useState } from 'react';

import '../style/ModalWindow.css'


const ModalWindow = ({ onClose, onAdd }) => {
  const [itemName, setItemName] = useState();

  const handleChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    onAdd(itemName);
    onClose();
  };

  return (
    <div className="modal-window">
      <div className="modal-header">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="modal-form">
            <label htmlFor="name">Название</label>
            <input type="text" id="name" value={itemName} onChange={handleChange} />
            <button onClick={handleAddItem}>Добавить</button>
          </div>
        </form>
      </div>
    </div>
  );
};



export default ModalWindow;


