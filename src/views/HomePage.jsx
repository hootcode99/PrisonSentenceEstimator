import React from 'react';
import { welcomeMessage } from '../constants/constants';

export default function Home() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://equalizingjustice.com/wp-content/uploads/2022/07/Footer-contact-bg.webp)'}}>
        <div className="hero-overlay bg-opacity-65"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
            <p className="mb-5">{welcomeMessage}</p>
            <h2 className="m-5">Choose a worksheet to get started.</h2>
            <label htmlFor="my-drawer" className="btn btn-info drawer-button">Select Worksheet</label>
          </div>
        </div>
        </div>
    )
}