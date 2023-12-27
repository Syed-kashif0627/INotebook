import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const note=[
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
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
