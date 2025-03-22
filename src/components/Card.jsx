import React from 'react'

const Card = ({title, children}) => {
    return (
        <div className="card bg-base-300 text-primary-content w-96">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="divider divider-accent"/>
                <div className="card-actions justify-between">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Card;