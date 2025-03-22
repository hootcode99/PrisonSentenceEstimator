import React from 'react'

const ResponsiveGrid = ({ children }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-1 gap-x-1">
            {children}
        </div>
    );
}

export default ResponsiveGrid;