import React from 'react';
import { Link, NavLink } from 'react-router-dom';

 const Header = () => {
  return (
    <header className=" bg-teal-700">
       <ul className="list flex px-8">
          <li className="list-item text-gray-50 mx-2"><Link to="/">Home</Link> </li>
          {/* {/* <li className=" list-item"><Link path="/about">About</Link> </li> */}
          <li className=" list-item text-gray-50 px-2"><NavLink to="/about">About</NavLink> </li>
          <li className=" list-item text-gray-50 px-2"><NavLink to="/hoc">HOC</NavLink> </li>
       </ul>
    </header>
  )
}
export default Header;