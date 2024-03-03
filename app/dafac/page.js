'use client'
import { useState } from 'react';

import Wizard from './wizard';
import Modal from 'react-modal';




const DafacPage = ({incidentData}) => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  

  const customStyles = {
    content: {
      width: '80%', // Adjust the width as needed
      height: '80%', // Adjust the height as needed
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>

<button className="flex text-sm text-red-100 px-3 py-1 rounded-full bg-red-500 hover:bg-red-800 focus:shadow-outline-red"
 
 onClick={openModal}>Add
 
 </button>

<Modal
isOpen={modalIsOpen}
onRequestClose={closeModal}
style={customStyles}
>

    <Wizard incidentData={incidentData} closeModal={closeModal}/>

  </Modal>
  </div>

  );
};

// Export the main component
export default DafacPage;
