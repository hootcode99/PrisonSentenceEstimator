import React from 'react'

const Card = ({title, children}) => {
    return (
        <div className="card bg-base-300 text-primary-content w-ful m-1">
            <div className="card-body p-8">
                <h2 className="card-title">{title}</h2>
                <div className="divider divider-accent"/>
                <div className="card-actions justify-between pl-5 pr-5">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Card;