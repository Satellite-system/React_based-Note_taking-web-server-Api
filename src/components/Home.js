import React from "react";
import Addnotes from "./Addnotes";
import Notes from "./Notes";

function Home(props) {
  const {showAlert} = props;
  return (
    <div>
      <div className="container my-2">
        <Addnotes showAlert={showAlert}/>
        <Notes showAlert={showAlert}/>
      </div>
    </div>
  );
}

export default Home;
