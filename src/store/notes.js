import { createContext, useState } from 'react';

// createContext creates object that actually contain react component
// that is why 'Task' starts with capital letter
const NotesContext = createContext({
  notes: [],
  addNote: (note) => {},
  removeNote: (noteId) => {}
});
 
export const NotesContextProvider = ({ children }) => {
  const [notesList, setNotesList] = useState([]);

  const addNoteHandler = (note) => {
    setNotesList(prevNote => prevNote.concat(note))
  }

  const removeNoteHandler = (noteId) => {
    setNotesList(notesList.filter(note => note.id !== noteId))
  }

  const context = {
    notes: notesList,
    addNote: addNoteHandler,
    removeNote: removeNoteHandler
  };

  return (
    <NotesContext.Provider value={context}>
      {children}
    </NotesContext.Provider>
  )
}

export default NotesContext
