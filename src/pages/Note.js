import { useContext, useState, useLayoutEffect } from "react"
import NotesContext from '../store/notes';
import { Link, useParams } from 'react-router-dom';

const Note = () => {
  const noteContext = useContext(NotesContext);
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState({});
  const { id } = useParams();
  const dateOptions = { month: 'short', day: '2-digit', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit' };

  useLayoutEffect(() => {
    if (noteContext.notes.length > 0) {
      const verifiedID = noteContext.notes.filter((note) => note.id === id);
      if (verifiedID.length > 0) {
        setShowNote(true);
        setNote(verifiedID[0]);
      }
    }
  }, [id, noteContext])

  return showNote ? (
    <main>
      <div className="row">
        <div className="col-lg-1 col-md-2 col-2">
          <Link to="/" className="text-decoration-none text-dark float-left mr-3">
            <svg style={{ width: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </Link>
        </div>
        <div className="col">
          <h5>{note.title}</h5>
          <small className="text-muted form-text">{new Date(note.createdAt).toLocaleString('en-PH', dateOptions)}</small>
        </div>
      </div>

      <p className="mt-3 text-justify">{note.content}</p>
    </main>
  ) : (
    <div className="text-center">
      <h5>Note does not exist.</h5>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Note
