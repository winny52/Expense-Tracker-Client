import React from 'react';
import { Link } from 'react-router-dom'; 


function Navbar() {
  return (
    <nav className="fixed top-0 right-0 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;