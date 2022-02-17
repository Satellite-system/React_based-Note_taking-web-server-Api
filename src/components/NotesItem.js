import React from "react";

const NotesItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title} </h5>
          <p className="card-text">
          {note.discription}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iure alias commodi suscipit neque, delectus ea nemo corrupti cum, dolor sit officiis harum tempora!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
