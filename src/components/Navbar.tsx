import React from "react";

export const NavBar: React.FC = () => (
    <nav>
        <div className="nav-wrapper px1">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Главная</a></li>
                <li><a href="/">Список дел</a></li>
            </ul>
        </div>
    </nav>
);