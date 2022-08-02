import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const ToDoInput = ({setItemStateFunction, onItemChange, setOnItemChange, editItem}) => {
  
  return (
    
    <div className="card">
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-check2-square"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Add a ToDo Item"
            aria-label="Add a ToDo Item"
            aria-describedby="basic-addon1"
            style={{ boxShadow: "none" }}
            value={onItemChange}
            onChange={(e)=>setOnItemChange(e.target.value)}
          />
        </div>
        <button
          type="button"
          className={editItem? "btn btn-success btn-lg btn-block btn-gradient w-100" : "btn btn-primary btn-lg btn-block btn-gradient w-100"}
          onClick={()=>{setItemStateFunction(onItemChange)}}
        >
          {editItem? "Edit Item":"Add Item"}
        </button>
      </div>
    </div>
  );
};

export default ToDoInput;
