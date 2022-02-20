import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";

const Notes = (props) => {
  const context = useContext(NoteContext);
  const {showAlert} = props;
  const { notes, getAllNotes, editNote } = context;
  const [noteVal, setNoteVal] = useState({
    eId: "",
    eInputTitle: "",
    eInputDescription: "",
    eInputTag: "",
  });
  useEffect(() => {
    getAllNotes();
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currNote) => {
    ref.current.click();
    setNoteVal({
      eId: currNote._id,
      eInputTitle: currNote.title,
      eInputDescription: currNote.discription,
      eInputTag: currNote.tag,
    });
  };

  const handleChange = (e) => {
    setNoteVal({ ...noteVal, [e.target.name]: e.target.value });
    // here target.name could also be used, just keep in mind target.id/target.name should be
    // same as the name of the states
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    // console.log("Note Updated " + noteVal);
    editNote(
      noteVal.eId,
      noteVal.eInputTitle,
      noteVal.eInputDescription,
      noteVal.eInputTag
    );
    refClose.current.click();
    showAlert("Successfully Edited Note","success");
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Hide ME
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-1">
                <div className="form-group">
                  <label htmlFor="InputTitle">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="eInputTitle"
                    name="eInputTitle"
                    aria-describedby="emailHelp"
                    value={noteVal.eInputTitle}
                    onChange={handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Above text will appear as Title of your Note.
                  </small>
                </div>
                <div className="form-group my-1">
                  <label htmlFor="InputDescription">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={noteVal.eInputDescription}
                    id="eInputDescription"
                    name="eInputDescription"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group my-1">
                  <label htmlFor="InputTag">Tag</label>
                  <input
                    className="form-control"
                    id="eInputTag"
                    name="eInputTag"
                    value={noteVal.eInputTag}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEditClick}
                disabled={
                  noteVal.eInputTitle.length < 3 || noteVal.eInputDescription.length < 3
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>My Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 ? "No Notes to Display" : ""}
        </div>
        {notes.map((note) => {
          return (
            <NotesItem key={note._id} note={note} updateNote={updateNote} showAlert={showAlert}/>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
