import React from 'react'

import Card from '../Card';

const SliderSelect = ({ data }) => {
    const {title, options, value, setter} = data;
    const length = options.length;

    const onChangeHandler = (e) => {
        setter(e.target.value);
        console.log(e.target.value); 
    }

    return (
        <Card title={title}>
            <div className="w-full max-w-xs">
                <input type="range" className="range range-accent" value={value} min={0} max={length} onChange={onChangeHandler}/>
                <div className="flex justify-between px-2.5 mt-2 text-xs">
                {Array.from({ length: length}).map((_, index) => (
                    <span key={index}>|</span>
                ))}

                </div>
                <div className="flex justify-between px-2.5 mt-2 text-xs">
                {options.map((option, index) => (
                        <span key={index}>{option.text}</span>
                ))}
                </div>
            </div>
        </Card>
    )
};

export default SliderSelect;


