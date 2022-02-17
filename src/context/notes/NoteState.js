import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const s1 = {
        "name" : "apna",
        "class" : "2Q"
    }
    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name":"dusra",
                "class" : "1!@re"
            })  
        }, 1000);
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;