import React from "react";
// onClick={deleteTask(id)}
const DeleteBtn = ({ deleteTask, id }) => {
  return (
    <div className="delete-button">
      <span onClick={() => deleteTask(id)} className="delete-button__text">
        Delete
      </span>
    </div>
  );
};

export default DeleteBtn;
