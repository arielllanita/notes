import { createContext, useState } from 'react';

// createContext creates object that actually contain react component
// that is why 'Task' starts with capital letter
const NotesContext = createContext({
  notes: [],
  addNote: (note) => { },
  removeNote: (noteId) => { }
});

export const NotesContextProvider = ({ children }) => {
  const [note, setNote] = useState(retrieveNotesHandler());

  /*---- NOTE ----*/
  // We also use useState to handle data for the sake of rendering since localStorage API
  // can't make children components to re-render when the state changes unlike useState.
  // Thus, children components is always up to date to the data provided by this context provider
  /* ----------- */

  function retrieveNotesHandler() {
    // Retrieve all keys from localStorage
    const keys = Object.keys(localStorage);
    // Retrieve all the values inside localStorage using the keys
    const notes = keys.reduce((arr, key) => {
      arr.push(JSON.parse(localStorage.getItem(key)));
      return arr
    }, []);
    return notes
  }

  function addNoteHandler(note) {
    localStorage.setItem(note.id, JSON.stringify(note));
    // To ensure that current note is appended to previous note(s)
    setNote(prevNotes => prevNotes.concat(note));
  }

  function removeNoteHandler(noteId) {
    localStorage.removeItem(noteId);
    setNote(note.filter((currNote) => currNote.id !== noteId));
  }

  const context = {
    notes: note,
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
