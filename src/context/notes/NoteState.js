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
        'auth-token':localStorage.getItem('token'),
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
        'auth-token':localStorage.getItem('token'),

      },
      body:JSON.stringify({title,description,tag})
    })
    const newnote=await res.json();

    if(title.length>0)
        setNotes(notes.concat(newnote))
  }
  const deleteNote=async (id)=>{
    const url=`${host}/api/notes/deletenote/${id}`
    const res=await fetch(url,{
      method:'DELETE',
      headers:{
        'content-type':'application/json',
        'auth-token':localStorage.getItem('token'),

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
        'auth-token':localStorage.getItem('token'),

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
  
  //Alert context
  const [alert,setAlert]=useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1800
    )
  }
  return (
    <NoteContext.Provider value={{host,notes,setNotes,addNote,deleteNote,getallNotes,editNote,alert,showAlert}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
