import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader: React.FC = () => {

  return (
    <header>
      <div className="head">
        <ul className="link-list">
          <li className="link-list-item"><NavLink className="link" to="/" exact>Home</NavLink></li>
          <li className="link-list-item"><NavLink className="link" to="/about" exact>About</NavLink></li>
        </ul>
      </div>
    </header>
  );
}

export default AppHeader;