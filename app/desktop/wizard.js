
'use client'

import { useState, useEffect } from 'react';
import RegistrationPage from './registration';
import ChildrenPage from './childrenPage';
import WorkingPage from './workingPage';
import NavigationPage from './navigation'
import Modal from 'react-modal';


const Wizard = ({incidentData}) => {


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




    const [formData, setFormData] = useState({
        // Initialize form data structure with default values
        step1: {
          // Step 1 form fields
          surName: '',
          fName: '',
          mName:'',
          gender:'',
          age:'',
          dob:'',
          occupation:'',
          monthlyIncome:'',
          fourP:false,
          NHTS:false,
          ipType:'',
          pwd:false,
          sc:false,
        },
        step2: {
          // Step 2 form fields
        
        },
        // Additional data for Step 3 if needed

        step3: {
           
          },
      });
    

      const [currentStep, setCurrentStep] = useState(1);
      const totalSteps = 3; // Set the total number of steps
    
    
      const onNext = (step, data) => {
        setFormData((prevData) => ({
          ...prevData,
          [`step${currentStep}`]: data,
        }));
        setCurrentStep(step);
      };
    
      const onPrev = (step) => {
        setCurrentStep(step);
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

<div>
      <NavigationPage currentStep={currentStep} totalSteps={totalSteps} onNext={onNext} onPrev={onPrev} />

      {currentStep === 1 && <RegistrationPage incidentData={incidentData} closeModal={closeModal}  onNext={(data) => onNext(2, data)} />}
      {currentStep === 2 && (
        <ChildrenPage data={formData.step2} onNext={(data) => onNext(3, data)} onPrev={() => onPrev(1)} />
      )}
      {currentStep === 3 && <WorkingPage data={formData} onPrev={() => onPrev(2)} />}
    </div>


  </Modal>
    </div>
  );
};

export default Wizard;