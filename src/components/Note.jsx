import React from "react"

function Note(props) {
  return (
    <div className="flex flex-col w-60 max-h-full bg-white rounded-md shadow-lg p-2.5 m-4">
      <h1 className="text-base mb-1.5 font-bold font-Montserrat">{props.title}</h1>
      <p className="text-base mb-1.5 font-Montserrat">{props.content}</p>
    </div>
  )
}

export default Note
