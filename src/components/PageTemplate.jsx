import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageTemplate = ({ children }) => {
    return (
        <div className="w-full lg:w-4/5 mx-auto">
            <Navbar>
                {children}
            </Navbar>
            <Footer/>
        </div>
    );
};

export default PageTemplate;