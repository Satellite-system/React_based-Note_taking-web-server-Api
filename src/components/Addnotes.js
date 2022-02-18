import React, {useContext, useState} from "react";
import NoteContext from "../context/notes/noteContext";

const Addnotes = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [noteVal, setNoteVal] = useState({InputTitle: '', InputDescription:'', InputTag:'default'});

  const handleChange = (e)=>{
    setNoteVal( {...noteVal, [e.target.name]:e.target.value})
    // here target.name could also be used, just keep in mind target.id/target.name should be
    // same as the name of the states
  }

  const btnClicked = (e) => {
    e.preventDefault();
    addNote(noteVal.InputTitle, noteVal.InputDescription, noteVal.InputTag);
  };

  return (
    <div>
      <h2>Add Note</h2>
      <form className="my-1">
        <div className="form-group">
          <label htmlFor="InputTitle">Title</label>
          <input
            type='text'
            className="form-control"
            id="InputTitle"
            name="InputTitle"
            aria-describedby="emailHelp"
            placeholder="Enter Title of the Note"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Above text will appear as Title of your Note.
          </small>
        </div>
        <div className="form-group my-1">
          <label htmlFor="InputDescription">Description</label>
          <input
            type='text'
            className="form-control"
            id="InputDescription"
            name="InputDescription"
            placeholder="Description of the Note"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label htmlFor="InputTag">Tag</label>
          <input
            className="form-control"
            id="InputTag"
            name="InputTag"
            placeholder="Tag for the Note"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary my-1"
          onClick={btnClicked}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnotes;
