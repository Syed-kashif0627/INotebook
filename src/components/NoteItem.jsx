import React ,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';


const NoteItem = (props) => {
    const {note}=props;
    const context=useContext(noteContext);
    const {deleteNote}=context;

  return (
    <div className='col-md-3'>
      <div className="card my-3" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', right: '-12px' }}>
              <i onClick={()=>{deleteNote(note._id)}} className="fa-solid fa-trash fa-fade mx-2"/>
              <i  className="fa-solid fa-pen-to-square fa-fade mx-2"/>
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
