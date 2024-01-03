import React, { useState,useContext } from 'react'
import noteContext from '../context/notes/noteContext';


function AddNote() {
    const context=useContext(noteContext);
    const {addNote}=context;

    const [note,setNote]=useState({title:"",description:"",tag:''});
    const handlechange=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
    }

    const handleEvent=(event)=>{
        setNote({...note, [event.target.name]:event.target.value});
    }

  return (
      <div >
        <h2>Take Notes</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" onChange={handleEvent} placeholder='*Enter Note Title' value={note.title} className="form-control" name='title' id="title" aria-describedby="emailHelp" minLength={5} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input type="text" onChange={handleEvent} placeholder='*Enter Description' value={note.description} className="form-control" name="description" id="description" minLength={5} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input type="text" onChange={handleEvent} className="form-control"value={note.tag} id="tag" name="tag"/>
            </div>
            <button type="submit" disabled={note.title.length<5 || note.description.length<5} onClick={handlechange} className="btn btn-primary">Add Note</button>
          </form>
          <br />
      </div>
  )
}

export default AddNote
