import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(inputNotes) {
    setNotes((prevItems) => {
      return [...prevItems, inputNotes];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  // function updateNote(id) {
  //   setNotes((prevNotes) => {
  //     return prevNotes.find((note) => { note.index === id
  //       return note
  //     })
  //   })
  // }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          onDel={deleteNote}
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
