import React, { createContext, useState } from 'react';

// Create the context
export const DrugABCInOutContext = createContext();

// Create the provider component
export const DrugABCInOutProvider = ({ children }) => {
    const [priorAdultFelonyConvictions, setPriorAdultFelonyConvictions] = useState(50);

    const options = {
        start: 0,
        stop: 100,
        step: 10,
        value: priorAdultFelonyConvictions,
    };

    return (
        <DrugABCInOutContext.Provider value={{ options, setPriorAdultFelonyConvictions }}>
            {children}
        </DrugABCInOutContext.Provider>
    );
};