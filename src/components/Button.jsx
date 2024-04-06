import React, { useState } from 'react';

import ModalWindow from './ModalWindow';

import '../style/Button.scss';

const Button = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={ `bubbly-button ${isAnimating ? 'animate' : ''}` } onClick = { handleClick}>
        Add +
      </button>
      {showModal && <ModalWindow onClose={handleCloseModal} />}
    </>
  );
};

export default Button;

