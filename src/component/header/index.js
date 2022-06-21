import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/counterClass">Counter Class Component</NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/calculator">calculator</NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/todoClass">ToDo Class</NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/todoFunctionalComp">
              ToDo Functional component
            </NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/useContextHooks">Use Context hooks</NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/useReducerHooks">Use Reducer Hooks</NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/UseCallBackHooks">Use CallBack Hooks</NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/useref">Use Ref</NavLink>
          </li>
          <li className="mb-2 px-3 py-1 text-sm text-blue-500 block">
            <NavLink to="/registerForm">Register Form</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
