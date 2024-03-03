
'use client'

import { useState } from "react";

const ChildrenPage = ({data, onNext, onPrev}) => {

    const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic for Step 2
    onNext(formData);
  };


return (

    <form onSubmit={handleSubmit}>
    <h2>Step 2</h2>
    {/* Add your form fields for Step 2 */}
    <div>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Password:</label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>

    <div className="flex">
      <button type="button" onClick={onPrev}>
        Previous
      </button>
      <button type="submit">Next</button>
    </div>
  </form>

)



}

export default ChildrenPage


