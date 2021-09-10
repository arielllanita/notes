import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../store/notes';
import NoteContainer from '../components/NoteContainer';

const Home = () => {
  const noteContext = useContext(NotesContext);
  
  return (
    <main>
      <div className="row">
        <div className="col text-md-left text-center">
          <h2 className="pl-md-2 pl-0">Notes</h2>
        </div>
        <div className="col-lg-4 col-md-5 col-12">
          <Link to="/add" className="text-decoration-none">
            <button className="btn btn-success btn-block rounded-pill shadow-sm">New note</button>
          </Link>
        </div>
      </div>

      {noteContext.notes.map((note) => (
        <NoteContainer title={note.title} content={note.content} id={note.id} key={note.id} />
      ))}
    </main>
  )
}

export default Home
