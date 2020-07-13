import React from "react";
const DeleteBtn = ({ deleteTask, id, isDelete }) => {
  return (
    <div className="delete-button">
      <span onClick={() => deleteTask(id)} className="delete-button__text">
        Delete
      </span>
    </div>
  );
};

export default DeleteBtn;
