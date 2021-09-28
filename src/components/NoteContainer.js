import { useContext } from "react"
import NotesContext from "../store/notes"
import { Link } from 'react-router-dom';

const NoteContainer = ({ title, content, id }) => {
  const noteContext = useContext(NotesContext);
  // Function responsible for removing a note
  const remove = () => noteContext.removeNote(id);

  return (
    <div className="shadow-sm py-4 px-3 rounded-lg mt-3 cursor-pointer">
      <div className="row">
        <div className="col-lg-9 col-md-8">
          <Link to={`/note/${id}`} className="text-dark">
            <h5>{title}</h5>
          </Link>
          <p className="text-truncate">{content}</p>
        </div>
        <div className="col-lg-3 col-md-4 text-right">
          <button className="btn btn-danger btn-sm shadow-sm" onClick={remove}>
            <svg style={{ width: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteContainer
