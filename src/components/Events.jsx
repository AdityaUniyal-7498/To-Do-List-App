import { FaDeleteLeft } from "react-icons/fa6";

function Events({ toDoItems, onDeleteClick }) {
  return (
    <>
      <div>
        <br />
        {toDoItems.map((item) => (
          <div key={item.name} className="row ">
            #<div className="col-4">{item.name}</div>
            <div className="col-3">{item.date}</div>
            <div className="col-3">{item.time}</div>
            <div className="col-1">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDeleteClick(item.name)}
              >
                <FaDeleteLeft />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Events;
