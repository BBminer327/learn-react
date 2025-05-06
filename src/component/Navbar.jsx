import React from "react";
import "../assets/index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-[300px] h-screen sticky top-0 bg-neutral-800 text-white relative">
      <div className="logo py-5 px-8 text-3xl absolute text-center w-full">
        React Router
      </div>
      <div className="absolute top-[100px] w-full px-6">
        <ul className="nav-links flex flex-col font-medium">
          <li className="p-3 hover:bg-neutral-50 hover:text-stone-900 rounded-2xl flex">
            <svg
              className="w-6 h-6 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>

            <Link to="/home">Home</Link>
          </li>
          <li className="p-3 hover:bg-neutral-50 hover:text-stone-900 rounded-2xl flex">
            <svg
              class="w-6 h-6 mr-2 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>

            <Link to="/about">About</Link>
          </li>
          <li className="p-3 hover:bg-neutral-50 hover:text-stone-900 rounded-2xl flex">
            <svg
              className="w-6 h-6 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"
              />
            </svg>

            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="bottom-[20px] absolute w-full px-6">
        <ul className="nav-links flex flex-col font-medium">
          <li className="p-3 hover:bg-neutral-50 hover:text-stone-900 rounded-2xl flex ">
            <svg
              className="w-6 h-6 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              />
            </svg>

            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
