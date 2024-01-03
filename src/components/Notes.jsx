import React, { useContext, useEffect,useRef, useState} from 'react'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import noteContext from '../context/notes/noteContext';


const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getallNotes,editNote } = context;

    useEffect(() => {
        getallNotes()
        // eslint-disable-next-line
    }, [])
    
    const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:''});
    const myref=useRef(null)
    const updateNote = (currnote) => {
        setNote({id:currnote._id,etitle:currnote.title,edescription:currnote.description,etag:currnote.tag})
    }
    
    const handlechange=(e)=>{
        e.preventDefault();
        editNote(note.id,note.etitle,note.edescription,note.etag);
        myref.current.click();
    }

    const handleEvent=(event)=>{
        setNote({...note, [event.target.name]:event.target.value});
    }
    return (
        <>
            <AddNote />
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Notes!!</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" onChange={handleEvent}  className="form-control" value={note.etitle } name='etitle' id="etitle" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" onChange={handleEvent}  className="form-control" value={note.edescription} name="edescription" id="edescription"/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" onChange={handleEvent} className="form-control" value={note.etag} id="etag" name="etag"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handlechange} ref={myref} type="button" data-bs-dismiss="modal" className="btn btn-primary">Update Notes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2>Your Notes</h2>
                <div className="container text-center my-4">
                    {notes.length===0 && <p>No Notes to display!!!</p>}
                </div>
                {
                    notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
                    })
                }
            </div>
        </>
    )
}

export default Notes;


