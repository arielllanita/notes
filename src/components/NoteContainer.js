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
            <i className="fa fa-trash-o" style={{ width: '16px' }} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteContainer
