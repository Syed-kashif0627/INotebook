import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const note=[
    {
      "_id": "657b2a907daq84f010ef0ca24",
      "user": "657b072431527cc174d5c78e",
      "title": "My Notes2",
      "description": "Hello this is my second Note",
      "tag": "Personal Notes2",
      "date": "2023-12-14T16:17:20.733Z",
      "__v": 0
    },
    {
      "_id": "658c58657f986fydf467d1742",
      "user": "657b072431527cc174d5c78e",
      "title": "My Notes3",
      "description": "Hello this is my Third Note",
      "tag": "Genaral",
      "date": "2023-12-27T17:01:25.309Z",
      "__v": 0
    },
    {
      "_id": "657b2a907da84fw010ef0ca24",
      "user": "657b072431527cc174d5c78e",
      "title": "My Notes2",
      "description": "Hello this is my second Note",
      "tag": "Personal Notes2",
      "date": "2023-12-14T16:17:20.733Z",
      "__v": 0
    },
    {
      "_id": "658c58657f98e6fdf467d1742",
      "user": "657b072431527cc174d5c78e",
      "title": "My Notes3",
      "description": "Hello this is my Third Note",
      "tag": "Genaral",
      "date": "2023-12-27T17:01:25.309Z",
      "__v": 0
    },
    {
      "_id": "657b2a907daf84f010ef0ca24",
      "user": "657b072431527cc174d5c78e",
      "title": "My Notes2",
      "description": "Hello this is my second Note",
      "tag": "Personal Notes2",
      "date": "2023-12-14T16:17:20.733Z",
      "__v": 0
    },
    {
      "_id": "658c5865f7f986fdf467d1742",
      "user": "657b072431527cc174d5c78e",
      "title": "My Notes3",
      "description": "Hello this is my Third Note",
      "tag": "Genaral",
      "date": "2023-12-27T17:01:25.309Z",
      "__v": 0
    },
    {
      "_id": "657b2a907da84f010ef0ca24",
      "user": "657b072431527cc174d5c78e",
      "title": "My Notes2",
      "description": "Hello this is my second Note",
      "tag": "Personal Notes2",
      "date": "2023-12-14T16:17:20.733Z",
      "__v": 0
    },
    {
      "_id": "658c58657f986fdf467d1742",
      "user": "657b072431527cc174d5c78e",
      "title": "My Notes3",
      "description": "Hello this is my Third Note",
      "tag": "Genaral",
      "date": "2023-12-27T17:01:25.309Z",
      "__v": 0
    }
  ]

  const [notes,setNotes]=useState(note);

  const addNote=(title,description,tag)=>{
    const newnote=  {
      "_id": "658c586757f986fdf467d1742",
      "user": "657b0724315273cc174d5c78e",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-12-27T17:01:25.309Z",
      "__v": 0
    }
    //notes.concat(newnote)
    if(title.length>0)
        setNotes(notes.concat(newnote))
  }
  const deleteNote=(id)=>{

    const newnote=notes.filter((note)=>{return note._id!==id});
    setNotes(newnote)
  }

  const updateNote=()=>{

  }
  return (
    <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
