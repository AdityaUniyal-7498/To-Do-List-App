import Name from "./components/Name.jsx";
import AddEvent from "./components/AddEvent.jsx";
import Events from "./components/Events.jsx";
import Empty from "./components/Empty.jsx";
import "./App.css";
import styles from "./components/ToDoContainer.module.css";
import { useState } from "react";

function App() {
  const initialToDoItems = [
    { name: "Buy Milk", date: "2006-08-16", time:"14:20:P.M" },
    { name: "Got to College", date: "2024-08-16", time:"10:40:A.M" },
    { name: "Code", date: " Everyday", time:"00:00:AM"},
  ];

  const appName = " To-Do App ";

  const [additem, setitem] = useState(initialToDoItems);
  const addNewEvent = (iname, idate, itime) => {
    console.log(
      `A new Item of  name: ${iname} and date: ${idate} and time:${itime} has been added`
    );
    const newToDoItems = [...additem, { name: iname, date: idate, time: itime }];
    setitem(newToDoItems);
    console.log(additem);
    console.log(newToDoItems);
  };
  const handleDeleteItem = (toDoItemName) => {
    console.log(` ${toDoItemName}: Event deleted`);
    const newtodoitemsafterdel = additem.filter(
      (item) => item.name != toDoItemName
    );
    setitem(newtodoitemsafterdel);
  };

  return (
    <center>
      <div className={styles.ToDoContainer}>
        <Name appName={appName} />
        <center className="content">
          <br />
          <AddEvent addNewEvent={addNewEvent} />
          <br />
          {additem.length === 0 && <Empty />}
          <Events toDoItems={additem} onDeleteClick={handleDeleteItem} />
          <br />
        </center>
      </div>
    </center>
  );
}

export default App;
