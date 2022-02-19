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
    console.log(res);
    setNotes(res);
  };


  // Add a Note
  const addNote = async (title, discription, tag) => {
    console.log("new Note added");
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

    const note = {
      _id: "620b6c49b7w782e9b7ds812260k43",
      user: "620a5621f6e737078125c2a4",
      title: title,
      discription: discription,
      tag: tag,
      date: "2022-02-15T09:03:05.102Z",
      __v: 0,
    };

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
    console.log("Deleted note "+res);

    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // TODO : API CALL
    // Example POST method implementation:
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify(title, description, tag), // body data type must match "Content-Type" header
    });
    const res = response.json(); // parses JSON response into native JavaScript objects
    console.log(res);
    

    // logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
