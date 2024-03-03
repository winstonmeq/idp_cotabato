
'use client'

import { useState, useEffect } from 'react';
import RegistrationPage from './registration';
import ChildrenPage from './childrenPage';
import WorkingPage from './workingPage';
import NavigationPage from './navigation'

const Wizard = ({incidentData, closeModal}) => {

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
          children1: '',
          age1: '',
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


      <div>
      <NavigationPage currentStep={currentStep} totalSteps={totalSteps} onNext={onNext} onPrev={onPrev} />
      {currentStep === 1 && <RegistrationPage incidentData={incidentData} closeModal={closeModal} data={formData.step1}  onNext={(data) => onNext(2, data)} />}
      {currentStep === 2 && (
        <ChildrenPage data={formData.step2} onNext={(data) => onNext(3, data)} onPrev={() => onPrev(1)} />
      )}
      {currentStep === 3 && <WorkingPage data={formData} onPrev={() => onPrev(2)} />}
    </div>
    </div>
  );
};

export default Wizard;