import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../routes/routes';
import ThemeController from './ThemeController';

export default function Navbar({ children }) {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                { children }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li><ThemeController /></li>
                {routes.map(({ path, title }, index) => (
                    <li key={index}>
                        <Link key={index} to={path}>{title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}