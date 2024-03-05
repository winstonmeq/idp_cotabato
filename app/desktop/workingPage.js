
'use client'


const WorkingPage = ({ data, onPrev}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle final form submission logic for Step 3
        console.log('All form data:', data);
        // You can send the data to the server or perform any final processing here
        console.log('All form data:', data.step1);
        console.log('All form data:', data.step1.firstName);

       
      };   

return (

<div>
<form onSubmit={handleSubmit}>
      <h2>Step 3</h2>
      <p>This is the final step. You can add any additional information or confirmation messages here.</p>

      <div className="flex gap-2">
        <button type="button" onClick={onPrev}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>

</div>


)



}

export default WorkingPage


