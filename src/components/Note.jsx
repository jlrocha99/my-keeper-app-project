import React from "react"

function Note() {
    return(
        <div className="w-60 max-h-full bg-white rounded-md shadow-lg p-2.5 m-4">
                <h1 className="text-base mb-1.5 font-bold font-Montserrat">This is the note title</h1>
                <p className="text-base mb-1.5 font-Montserrat">this is the note content</p>
        </div>
    )
}

export default Note

