import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../routes/routes';
import ThemeController from './ThemeController';

const Navbar = ({ children }) => {
    let currentRoute = routes.find(route => route.path === window.location.pathname)?.title || 'Home';

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="breadcrumbs text-xl flex justify-start space-x-4">
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button text-lg">Navigate</label>
                    <ul className="flex space-x-4">
                        <li>Home</li>
                        <li>{currentRoute}</li>
                    </ul>
                </div>
                <div className="divider"/>
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
    
    );
};

export default Navbar;