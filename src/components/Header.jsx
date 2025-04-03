import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-200 shadow-md px-4 border-b border-b-black/10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" onClick={() => navigate('/')}>daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
              <li>
                <button
                  onClick={() => navigate('/login')}
                >Login</button>
              </li>

            <li>
              <button
                onClick={() => navigate('/signup')}
              >Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
