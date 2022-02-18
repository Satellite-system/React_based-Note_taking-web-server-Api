import React, {useContext} from "react";
import NoteContext from "../context/notes/noteContext";

const NotesItem = (props) => {
  const { note } = props;
  const context = useContext(NoteContext);
  const {deleteNote} = context;

  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">
            <div className="d-flex align-items-center">
              {note.title}
              <i className="fa-solid fa-trash mx-2" onClick={()=>{ deleteNote(note._id) }}></i>
              <i className="fa-solid fa-pencil mx-2"></i>
            </div>
          </h5>

          <p className="card-text">
            {note.discription}. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
