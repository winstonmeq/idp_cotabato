// src/components/Navigation.js
import React from 'react';

const NavigationPage = ({ currentStep, totalSteps, onNext, onPrev }) => {

  const renderCircles = () => {

    const circles = [];

    for (let i = 1; i <= totalSteps; i++) {
      const isActive = i === currentStep;
      circles.push(
        <div
          key={i}
          className={`flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full ${
            isActive ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
          } cursor-pointer`}

         // onClick={() => goToStep(i)}          
        >

          {i}

        </div>
      );

      if (i < totalSteps) {
        circles.push(<div key={`arrow${i}`} className="w-6 h-px bg-gray-300" />);
      }

    }

    return circles;

  };

  const goToStep = (step) => {
    if (step > currentStep) {
      onNext(step);
    } else if (step < currentStep) {
      onPrev(step);
    }
  };

  return <div className="flex flex-row justify-center">{renderCircles()}</div>;
};

export default NavigationPage;