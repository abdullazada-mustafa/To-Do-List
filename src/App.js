import React from "react";
import ToDoInput from "./components/ToDoInput.jsx";
import ToDoList from "./components/ToDoList.jsx";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([])
  const [onItemChange, setOnItemChange] = useState('')
  const [editItem, setEditItem] = useState(false)

  const setItemStateFunction = (prop)=>{
    setItems((prev)=>{
      return [...prev, prop]
    })
    setOnItemChange('')
    return editItem===true?setEditItem(false):null
}

const clearItem = (indexOfItem)=>{
  return setItems(items.filter((value,index)=>{return indexOfItem!==index}))
}
const editItemBtn = (item,indexOfItem)=>{
  setEditItem(true)
  setOnItemChange(item)
  return setItems(items.filter((value,index)=>{return indexOfItem!==index}))
}
  const clearList = ()=>{
    setEditItem(false)
    return setItems([])
  }

  return (
    <div className="container" style={{width:'50%'}}>
      <div className="row justify-content-center pt-5">
        <div className="col-2 h4 text-center w-100">ToDo Input</div>
      </div>
      <ToDoInput setItemStateFunction={(prop)=>setItemStateFunction(prop)} onItemChange={onItemChange} setOnItemChange={setOnItemChange} editItem={editItem}/>
      <div className="row justify-content-center pt-5">
        <div class="col-2 h4 text-center w-100">ToDo List</div>
      </div>
      <ToDoList items={items} clearList={clearList} editItemBtn={editItemBtn} clearItem={clearItem}/>
    </div>
  );
};

export default App;
