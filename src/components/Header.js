import React from 'react';
import { Link, withRouter } from 'react-router';

export default () => (
  <header>
    <div className="header-inner">

        <div className="header-logo">
        GOOD<sup><span>F</span>OOD</sup>
        </div>
        <nav className="header-navigation">
            <ul className="header-navigation__list">
                <li><a href="#">Profile</a>
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/ingredients">
                        Ingredients
                    </Link>
                </li>
                <li>
                    <Link to="/meals">
                        Meals
                    </Link>
                </li>
                <li> <a href="#">Sign-out</a>
                </li>
            </ul>
        </nav>
    </div>
</header>
)
