import { Link, useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import NotesContext from '../store/notes';

const Form = () => {
  const history = useHistory();
  const noteContext = useContext(NotesContext)
  const [note, setNote] = useState({});

  // Function responsible for adding data to component's state
  const dataHandler = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  // Function responsible for form submission
  const submitHandler = (e) => {
    e.preventDefault();
    // Generate id for the added note
    const id = Math.random().toString(36).slice(2);
    // Get current date
    const createdAt = new Date();
    // Add note to global state and append the note id
    noteContext.addNote({ ...note, id, createdAt });
    // Navigate to home screen
    history.replace('/');
  }

  return (
    <main>
      <Link to="/" className="text-decoration-none text-dark float-left mr-4">
        <svg style={{ width: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
      </Link>
      <h4>Add note</h4>

      <form className="px-md-4 py-3" onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <div className="form-group">
          <input type="text" className="form-control" name="title" onChange={dataHandler} required />
        </div>
        <label htmlFor="content">Content</label>
        <div className="form-group">
          <textarea className="form-control" cols="10" rows="5" name="content" onChange={dataHandler} required></textarea>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-7 mx-auto">
          <button className="btn btn-success btn-block rounded-pill shadow-sm">Add</button>
        </div>
      </form>
    </main>
  )
}

export default Form
