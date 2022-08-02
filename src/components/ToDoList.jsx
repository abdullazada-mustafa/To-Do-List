import React from "react";

const ToDoList = ({ items, clearList, editItemBtn, clearItem }) => {
  return (
    <div className="d-flex flex-column gap-4">
      {items.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card-body d-flex justify-content-between">
              {item === "" ? "None" : item}
              <div>
                <button style={{background:'none',border:'none'}} onClick={()=>{editItemBtn(item,index)}}>
                  <i
                    className="bi bi-pencil"
                    style={{ color: "green", fontSize: "1.3rem" }}
                  ></i>
                </button>
                <button
                  onClick={() => {
                    clearItem(index);
                  }}
                  style={{ background: "none", border: "none" }}
                >
                  <i
                    className="bi bi-trash"
                    style={{ color: "red", fontSize: "1.3rem" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <button
        onClick={() => clearList()}
        type="button"
        className="btn btn-danger btn-lg btn-block btn-gradient"
      >
        Clear List
      </button>
    </div>
  );
};

export default ToDoList;
