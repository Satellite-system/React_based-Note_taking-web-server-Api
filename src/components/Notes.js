import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/noteContext';
import NotesItem from './NotesItem';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getAllNotes} = context;
  useEffect(() => {
    getAllNotes()
  },[])
  
  return (
    <div className="row my-3">
        <h2>My Notes</h2>
       {notes.map((note) => { 
          return <NotesItem key={note._id} note={note} />;
        })}
    </div>
  )
}

export default Notes;