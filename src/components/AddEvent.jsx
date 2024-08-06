import { useState } from "react";
import { GrAdd } from "react-icons/gr";
function AddEvent({ addNewEvent }) {
  const [tdName, settdName] = useState("");
  const [tdDate, settdDate] = useState("");
  const [tdTime, settdTime] = useState("");
  const handleNameChange = (event) => {
    console.log(`${event.target.value} : was clicked !`);
    settdName(event.target.value);
  };
  const handleDateChange = (event) => {
    console.log(`${event.target.value} : was clicked!`);
    settdDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    console.log(`${event.target.value} : was clicked!`);
    settdTime(event.target.value);
  };
  const handleAddButtonClicked = () => {
    addNewEvent(tdName, tdDate, tdTime);
    settdName("");
    settdDate("");
    settdTime("");
  };
  return (
    <div className="row myrow">
      <h4> Add Event : </h4>
      <div className="col-4">
        <input
          type="text"
          value={tdName}
          placeholder=" Name "
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          value={tdDate}
          placeholder=" Date "
          onChange={handleDateChange}
        />
      </div>
      <div className="col-3">
        <input
          type="time"
          value={tdTime}
          placeholder=" Time "
          onChange={handleTimeChange}
        />
      </div>
      <div className="col-1">
        <button
          type="button"
          className=" btn btn-success"
          onClick={handleAddButtonClicked}
        >
          <GrAdd />
        </button>
      </div>
    </div>
  );
}

export default AddEvent;
