import React from "react";
import ToDoInput from "./components/ToDoInput.jsx";
import ToDoList from "./components/ToDoList.jsx";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [onItemChange, setOnItemChange] = useState("");
  const [editItem, setEditItem] = useState(false);

  const setItemStateFunction = (prop) => {
    setItems((prev) => {
      return [...prev, prop];
    });
    setOnItemChange("");
    return editItem === true ? setEditItem(false) : null;
  };

  const clearItem = (indexOfItem) => {
    return setItems(
      items.filter((value, index) => {
        return indexOfItem !== index;
      })
    );
  };
  const editItemBtn = (item, indexOfItem) => {
    setEditItem(true);
    setOnItemChange(item);
    return setItems(
      items.filter((value, index) => {
        return indexOfItem !== index;
      })
    );
  };
  const clearList = () => {
    setEditItem(false);
    return setItems([]);
  };

  return (
    <div className="container">
      <div className="d-flex flex-column ">
        <div className="h4 text-center mb-3">ToDo Input</div>
        <ToDoInput
          setItemStateFunction={(prop) => setItemStateFunction(prop)}
          onItemChange={onItemChange}
          setOnItemChange={setOnItemChange}
          editItem={editItem}
        />
      </div>

      <div className="d-flex flex-column mt-5">
        <div className="h4 text-center mb-3">ToDo List</div>
         <ToDoList
          items={items}
          clearList={clearList}
          editItemBtn={editItemBtn}
          clearItem={clearItem}
        />
      </div>
    </div>
  );
};

export default App;
