import React, {useContext} from 'react'
import NoteContext from '../context/notes/noteContext';
import NotesItem from './NotesItem';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
        <h2>My Notes</h2>
       {notes.map((note) => { 
          return <NotesItem note={note} />;
        })}
    </div>
  )
}

export default Notes
//   
//   return (
//       <div className="container my-3">
//         <h2>My Notes</h2>
//         {notes.map((note) => {
//           return <NotesItem note={note} />;
//         })}
