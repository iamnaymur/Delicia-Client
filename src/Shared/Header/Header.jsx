import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 mb-20 shadow-yellow-400  shadow-lg">
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-yellow-400" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "bg-yellow-400" : "default"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contacts'
                className={({ isActive }) =>
                  isActive ? "bg-yellow-400" : "default"
                }
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  isActive ? "bg-yellow-400" : "default"
                }
              >
                Reservation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl text-yellow-400"
        >
          Delicia
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-yellow-400" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "bg-yellow-400" : "default"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "bg-yellow-400" : "default"
              }
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservation"
              className={({ isActive }) =>
                isActive ? "bg-yellow-400" : "default"
              }
            >
              Reservation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-7">
        {user && (
          <div
            className="tooltip"
            data-tip={user?.displayName || "no name found"}
          >
            <button>
              <img
                className=" w-14 h-14 rounded-full hover"
                src={user?.photoURL || ""}
                alt="User Profile"
              />
            </button>
          </div>
        )}
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        {/* <p>{user.email}</p> */}
      </div>
    </div>
  );
};

export default Header;
