import React from 'react'
import { Link } from 'react-router-dom'

export default function Navprofile() {
  return (
    <div className=' d-flex flex-column'>
        <Link to="/burger"><button className="btn btn-sm btn-light w-100">Pizza Gold</button></Link>
        <Link to="/calculatrice"><button className="btn btn-sm btn-light w-100">Calculatrice</button></Link>
        <Link to="/coffee"><button className="btn btn-sm btn-light w-100">Coca-coffee</button></Link>
        <Link to="/todo"><button className="btn btn-sm btn-light w-100">Todolist</button></Link>
    </div>
  )
}
