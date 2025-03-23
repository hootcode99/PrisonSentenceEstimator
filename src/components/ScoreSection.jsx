import React from 'react'

const ScoreSection = ({ score }) => {
    return (
        <div className="card bg-base-300 p-3">
            <h1 className="text-4xl justify-between">Score: {score}</h1>
        </div>
    );
};

export default ScoreSection; 