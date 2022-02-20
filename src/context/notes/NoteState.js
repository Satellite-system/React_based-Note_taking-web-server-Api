import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwYTU2MjFmNmU3MzcwNzgxMjVjMmE0In0sImlhdCI6MTY0NDkwNzQ2NH0.qwGn6K2IWTTgT8hYwpTXM5k023Ty9zrAy6JVzJ7QiGY"

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getAllNotes = async () => {
    //Api Call
    const url = `${host}/api/notes/fetchallnotes`;
    
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      }
    });
    const res = await response.json(); // parses JSON response into native JavaScript objects
    // console.log(res);
    setNotes(res);
  };


  // Add a Note
  const addNote = async (title, discription, tag) => {
    // console.log("new Note added");
    //Api Call
    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({title, discription, tag}), // body data type must match "Content-Type" header
    });
    const note = await response.json(); // parses JSON response into native JavaScript objects
    // console.log("Added note " +note);

    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // TODO: Api Call
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      }
    });
    const res = response.json(); // parses JSON response into native JavaScript objects
    // console.log("Deleted note "+res);

    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Edit a Note
  const editNote = async (id, title, discription, tag) => {
    // API CALL
    //  PUT method implementation:
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({title, discription, tag}), // body data type must match "Content-Type" header
    });
    const res = await response.json(); // parses JSON response into native JavaScript objects
    // console.log("updated note "+res);
    
    let newNote = JSON.parse(JSON.stringify(notes));

    // logic to edit in client
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id===id) {
        newNote[index].title = title;
        newNote[index].discription = discription;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
