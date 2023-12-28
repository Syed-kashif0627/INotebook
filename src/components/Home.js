import Notes from "./Notes";

const Home = () => {
  return (
    <>
      <div className='container my-3'>
        <h2>Take Notes</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" placeholder='Enter Note Title' className="form-control" name='title' id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input type="text" placeholder='Enter Description' className="form-control" name="description" id="description"/>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input type="text" className="form-control" id="tag" name="tag"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <br />

          <Notes/>
      </div>
    </>
  )
}

export default Home;
