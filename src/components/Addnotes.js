import React, {useContext, useState} from "react";
import NoteContext from "../context/notes/noteContext";

const Addnotes = (props) => {
  const context = useContext(NoteContext);
  const {showAlert} = props;
  const { addNote } = context;

  const [noteVal, setNoteVal] = useState({InputTitle: '', InputDescription:'', InputTag:''});

  const handleChange = (e)=>{
    setNoteVal( {...noteVal, [e.target.name]:e.target.value})
    // here target.name could also be used, just keep in mind target.id/target.name should be
    // same as the name of the states
  }

  const btnClicked = (e) => {
    e.preventDefault();
    if(noteVal.InputTag.length==0) setNoteVal({InputTag:'General'});
    addNote(noteVal.InputTitle, noteVal.InputDescription, noteVal.InputTag);
    showAlert("Note Added","success");
    setNoteVal({InputTitle: '', InputDescription:'', InputTag:''});
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
            value={noteVal.InputTitle}
            aria-describedby="emailHelp"
            placeholder="Enter Title of the Note"
            onChange={handleChange}
            required
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
            value={noteVal.InputDescription}
            placeholder="Description of the Note"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group my-1">
          <label htmlFor="InputTag">Tag</label>
          <input
            className="form-control"
            id="InputTag"
            value={noteVal.InputTag}
            name="InputTag"
            placeholder="Tag for the Note"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary my-1"
          onClick={btnClicked}
          disabled = {noteVal.InputTitle<3 || noteVal.InputDescription<3}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnotes;
