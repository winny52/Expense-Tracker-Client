import React from 'react';
import { Link } from 'react-router-dom'; 


function Navbar() {
  return (
    <nav className="m-5 fixed top-0 right-0 p-4">
      <ul className="flex space-x-10">
        <li>
          <Link to="/contact" className="text-blue-500 text-2xl ">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="bg-blue-800 text-white px-8 py-4 rounded hover:bg-blue-900">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;