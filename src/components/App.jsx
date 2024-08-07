import React from "react"
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />

      <div className="flex flex-row flex-wrap">
        {notes.map(newNotes => (
          <Note
            key={newNotes.key}
            title={newNotes.title}
            content={newNotes.content}
          />
          ))}

      </div>
      
      <Footer />
    </div>
    )
  }



export default App
