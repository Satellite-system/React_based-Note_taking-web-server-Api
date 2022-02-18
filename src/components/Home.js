import React from "react";
import Addnotes from "./Addnotes";
import Notes from "./Notes";

function Home() {
  return (
    <div>
      <div className="container my-2">
        <Addnotes/>
        <Notes />
      </div>
    </div>
  );
}

export default Home;
