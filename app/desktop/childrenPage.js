
'use client'

import { useState } from "react";
import DafacList from "../dafac/dafacList";

const ChildrenPage = ({data, onNext, onPrev}) => {

    const [formData, setFormData] = useState(data);



  const handleNext = (e) => {
    e.preventDefault();
    // Handle form submission logic for Step 2
    onNext(formData);
  };


return (

    

<div className="flex flex-col">
{formData.lastName}
  {/* <DafacList lastName={formData.lastName} firstName={formData.firstName}/> */}

  <div className="flex flex-row justify-between">
  <button type="button" onClick={onPrev}>
  Previous
</button>
<button type="button" onClick={handleNext}>Next</button>

  </div>

</div>

)



}

export default ChildrenPage


