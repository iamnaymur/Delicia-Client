import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user,logOut } = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOut()
      .then(result => { })
      .catch(error => console.log(error))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-3xl text-yellow-400">
          Delicia
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <p>{ user?.email}</p>
        <Link to='/login' className="btn">Login</Link>
        <button onClick={handleLogOut} className="btn">Logout</button>

        {/* <p>{ user.name}</p> */}
      </div>
    </div>
  );
};

export default Header;
