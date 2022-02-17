import React , { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  })
  
  return (
    <div>
      <h2>  This is About {a.state.name} of class {a.state.class} </h2>
    </div>
  )
}

export default About