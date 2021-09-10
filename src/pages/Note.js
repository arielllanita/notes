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
  }, [id, noteContext.notes])

  return showNote ? (
    <main>
      <div className="row">
        <div className="col-lg-1 col-md-2 col-2">
          <Link to="/" className="text-decoration-none">
            <button className="btn">
              <i className="fa fa-chevron-left"></i>
            </button>
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
    <div>
      <h5>ID {id} does not exist.</h5>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Note
