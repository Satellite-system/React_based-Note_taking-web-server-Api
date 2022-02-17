import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "620b6c49b7782e9b7d826043",
      user: "620a5621f6e737078125c2a4",
      title: "my title",
      discription: " this is a Discription",
      tag: "le lo",
      date: "2022-02-15T09:03:05.102Z",
      __v: 0,
    },
    {
      _id: "620b6f730ad01912a64822c6",
      user: "620a5621f6e737078125c2a4",
      title: "Updated title2",
      discription: "Let's see this is a Discription",
      tag: "le lo",
      date: "2022-02-15T09:16:35.227Z",
      __v: 0,
    },
    {
      _id: "620bac14a35169054f5b0027",
      user: "620a5621f6e737078125c2a4",
      title: "new title",
      discription: "Let's see this is a Discription",
      tag: "le lo",
      date: "2022-02-15T13:35:16.782Z",
      __v: 0,
    },
    {
      _id: "620b6c49b7782e9b7d826043",
      user: "620a5621f6e737078125c2a4",
      title: "my title",
      discription: " this is a Discription",
      tag: "le lo",
      date: "2022-02-15T09:03:05.102Z",
      __v: 0,
    },
    {
      _id: "620b6f730ad01912a64822c6",
      user: "620a5621f6e737078125c2a4",
      title: "Updated title2",
      discription: "Let's see this is a Discription",
      tag: "le lo",
      date: "2022-02-15T09:16:35.227Z",
      __v: 0,
    },
    {
      _id: "620bac14a35169054f5b0027",
      user: "620a5621f6e737078125c2a4",
      title: "new title",
      discription: "Let's see this is a Discription",
      tag: "le lo",
      date: "2022-02-15T13:35:16.782Z",
      __v: 0,
    },
    {
      _id: "620b6c49b7782e9b7d826043",
      user: "620a5621f6e737078125c2a4",
      title: "my title",
      discription: " this is a Discription",
      tag: "le lo",
      date: "2022-02-15T09:03:05.102Z",
      __v: 0,
    },
    {
      _id: "620b6f730ad01912a64822c6",
      user: "620a5621f6e737078125c2a4",
      title: "Updated title2",
      discription: "Let's see this is a Discription",
      tag: "le lo",
      date: "2022-02-15T09:16:35.227Z",
      __v: 0,
    },
    {
      _id: "620bac14a35169054f5b0027",
      user: "620a5621f6e737078125c2a4",
      title: "new title",
      discription: "Let's see this is a Discription",
      tag: "le lo",
      date: "2022-02-15T13:35:16.782Z",
      __v: 0,
    },
    {
      _id: "620b6c49b7782e9b7d826043",
      user: "620a5621f6e737078125c2a4",
      title: "my title",
      discription: " this is a Discription",
      tag: "le lo",
      date: "2022-02-15T09:03:05.102Z",
      __v: 0,
    },
    {
      _id: "620b6f730ad01912a64822c6",
      user: "620a5621f6e737078125c2a4",
      title: "Updated title2",
      discription: "Let's see this is a Discription",
      tag: "le lo",
      date: "2022-02-15T09:16:35.227Z",
      __v: 0,
    },
    {
      _id: "620bac14a35169054f5b0027",
      user: "620a5621f6e737078125c2a4",
      title: "new title",
      discription: "Let's see this is a Discription",
      tag: "le lo",
      date: "2022-02-15T13:35:16.782Z",
      __v: 0,
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
