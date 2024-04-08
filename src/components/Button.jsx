import React, { useState } from 'react';

import ModalWindow from './ModalWindow';

import '../style/Button.scss';


const Button = ({ onAdd }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={`bubbly-button ${isAnimating ? 'animate' : ''}`} onClick={handleClick}>
        Add +
      </button>
      {showModal && <ModalWindow onClose={handleCloseModal} onAdd={onAdd} />}
    </>
  );
};

export default Button;



