import React from 'react'

const Card = ({title, value, children}) => {
    return (
        <div className="card bg-base-300 text-primary-content w-ful m-1">
            <div className="card-body p-8">
                <div className="flex justify-between">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="ml-2 font-bold text-lg">{value}</h2>
                </div>
                <div className="divider divider-accent mt-1 mb-1"/>
                <div className="card-actions justify-between pl-5 pr-5">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Card;