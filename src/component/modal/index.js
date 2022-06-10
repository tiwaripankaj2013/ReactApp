import React, { useState } from "react";
import Modal from "./modal";
import "./index.css";
import Backdrop from './Backdrop'
import List from './list';


const Animation = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const showModal = () => {
    setmodalIsOpen(true);
  };

  const closeModal = () => {
    setmodalIsOpen(false);
  };

  return (
    <div className=" container mx-auto">
      <h1>React Animations</h1>
      <Modal show={modalIsOpen} closed={closeModal} />
      <Backdrop show={modalIsOpen} />
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default Animation;
