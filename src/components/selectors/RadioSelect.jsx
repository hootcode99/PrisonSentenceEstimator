import React from 'react'

import Card from '../Card';

const RadioSelect = ({ data }) => {
    const {title, options, value, setter} = data;
    const length = options.length;

    const onChangeHandler = (e) => {
        setter(e.target.value); 
        console.log(e.target.value);
    }

    return (
        <Card title={title} value={value}>
            {options.map((option, index) => (
                <label 
                    key={index} 
                    className="flex flex-col items-center space-y-1"
                >   
                    <input
                        key={index} 
                        type="radio" 
                        name="radio-6" 
                        className="radio radio-accent mb-1" 
                        value={option.value} 
                        onChange={onChangeHandler}/>
                        {option.text}
                </label>
            ))}
        </Card>
    );
}

export default RadioSelect;