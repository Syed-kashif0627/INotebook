import React ,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';


const NoteItem = (props) => {
    const {note,updateNote}=props;
    const context=useContext(noteContext);
    const {deleteNote,showAlert}=context;

  return (
    <div className='col-md-3'>
      <div className="card my-3" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', right: '-12px' }}>
              <i onClick={()=>{deleteNote(note._id); showAlert('Notes Deleted Successfully','success')}} className="fa-solid fa-trash fa-fade mx-2"/>
              <i onClick={()=>{updateNote(note)}}className="fa-solid fa-pen-to-square fa-fade mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
          </div>
      </div> 
    </div>
  )
}

export default NoteItem
