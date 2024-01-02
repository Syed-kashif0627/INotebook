import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const host='http://localhost:5000'

  const [notes,setNotes]=useState([]);

  const getallNotes=async ()=>{
    const url=`${host}/api/notes/fetchallnote`
    const res=await fetch(url,{
      method:'GET',
      headers:{
        'content-type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3YjA3MjQzMTUyN2NjMTc0ZDVjNzhlIn0sImlhdCI6MTcwMjU3MTUyM30.BhUi3kRBQTehpZdkLDTekqT6P0OSIC5bose7ocLvMJA',
      },
    })
    const json=await res.json();
    setNotes(json)
  }
  const addNote=async (title,description,tag)=>{
    const url=`${host}/api/notes/addnote`
    const res=await fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3YjA3MjQzMTUyN2NjMTc0ZDVjNzhlIn0sImlhdCI6MTcwMjU3MTUyM30.BhUi3kRBQTehpZdkLDTekqT6P0OSIC5bose7ocLvMJA',

      },
      body:JSON.stringify({title,description,tag})
    })
    const newnote=await res.json();

    // const =  {
    //   "_id": "658c586757f986fdf467d1742",
    //   "user": "657b0724315273cc174d5c78e",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2023-12-27T17:01:25.309Z",
    //   "__v": 0
    // }
    // //notes.concat(newnote)
    if(title.length>0)
        setNotes(notes.concat(newnote))
  }
  const deleteNote=async (id)=>{
    const url=`${host}/api/notes/deletenote/${id}`
    const res=await fetch(url,{
      method:'DELETE',
      headers:{
        'content-type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3YjA3MjQzMTUyN2NjMTc0ZDVjNzhlIn0sImlhdCI6MTcwMjU3MTUyM30.BhUi3kRBQTehpZdkLDTekqT6P0OSIC5bose7ocLvMJA',

      },
    })
    const json=await res.json();
    console.log(json)
    const newnote=notes.filter((note)=>{return note._id!==id});
    setNotes(newnote)
  }

  const editNote=async (id,title,description,tag)=>{
    const url=`${host}/api/notes/updatenote/${id}`
    const res=await fetch(url,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3YjA3MjQzMTUyN2NjMTc0ZDVjNzhlIn0sImlhdCI6MTcwMjU3MTUyM30.BhUi3kRBQTehpZdkLDTekqT6P0OSIC5bose7ocLvMJA',

      },
      body:JSON.stringify({title,description,tag})
    })
    const json=await res.json();
    console.log(json);

      let newNotes=JSON.parse(JSON.stringify(notes))
      for(let i=0;i<notes.length;i++){
          if(newNotes[i]._id===id){
            newNotes[i].title=title;
            newNotes[i].description=description;
            newNotes[i].tag=tag;
            break;
          }
      }
      setNotes(newNotes);
  }
  return (
    <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,getallNotes,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
