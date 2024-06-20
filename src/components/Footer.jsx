import React from "react"

function Footer() {
    var date = new Date().getFullYear()

    return(
        <footer className="text-center absolute w-screen bottom-0 h-10">
            <p className="text-slate-300">Copyright ⓒ {date}</p>
        </footer>
    )
}

export default Footer
