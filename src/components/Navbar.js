import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate();
    
  return (
    <nav className="custom--navbar">
        <div className="nav--div" onClick={()=>navigate("/")}>
            <h1 className="nav--header"> Movies Library React</h1>
            <h3>Choose genre and year and hover on movie card to see synopsis!</h3>

        </div>
    </nav>
  )
}

export default Navbar