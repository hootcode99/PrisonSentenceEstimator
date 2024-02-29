import React, { useState } from 'react';
import {
    addFelonyConvictionsABCSent, 
    priorAdultFelonyConvictionsABCSent,
    priorAdultFelonyCDConvsABCSent
} from '../options_data/drugOptionsABC.js';
import { generateSpans } from '../utils.jsx';

export function DrugSliderBar(props) {
    const [sliderLiteral, setSliderLiteral] = useState(props.value);

    const handleSliderChange = (e) => {
        if (props.sentence === "true") {
            if (props.section === "addFelonyConvictions") {
                props.update_fn(addFelonyConvictionsABCSent[e.target.value]);
                setSliderLiteral(e.target.value);
            } else if (props.section === "priorAdultFelonyConvs") {
                props.update_fn(priorAdultFelonyConvictionsABCSent[e.target.value]);
                setSliderLiteral(e.target.value);
            } else if (props.section === "ClassCD") {
                props.update_fn(priorAdultFelonyCDConvsABCSent[e.target.value]);
                setSliderLiteral(e.target.value);
            }    
        } else {
            props.update_fn(e.target.value);
            setSliderLiteral(e.target.value);
        }
    }

    return (
        <div className={props.arrStyle}>
            <input 
            type="range" 
            min={props.min} 
            max={props.max} 
            step={props.step} 
            value={sliderLiteral}
            className="range range-secondary w-full" 
            onChange={handleSliderChange}
            />
            <div className="w-full flex justify-between text-lg px-2">
                {generateSpans(props.min, props.max, props.step)}
            </div>
        </div>
    )
}

export function PropertySliderBar(props) {
    const [sliderLiteral, setSliderLiteral] = useState(props.value);

    const handleSliderChange = (e) => {
        if (props.sentence === "true") {
            if (props.section === "addFelonyConvictions") {
                props.update_fn(addFelonyConvictionsABCSent[e.target.value]);
                setSliderLiteral(e.target.value);
            } else if (props.section === "priorAdultFelonyConvs") {
                props.update_fn(priorAdultFelonyConvictionsABCSent[e.target.value]);
                setSliderLiteral(e.target.value);
            } else if (props.section === "ClassCD") {
                props.update_fn(priorAdultFelonyCDConvs[e.target.value]);
                setSliderLiteral(e.target.value);
            }    
        } else {
            props.update_fn(e.target.value);
            setSliderLiteral(e.target.value);
        }
    }

    return (
        <div className={props.arrStyle}>
            <input 
            type="range" 
            min={props.min} 
            max={props.max} 
            step={props.step} 
            value={sliderLiteral}
            className="range range-secondary w-full" 
            onChange={handleSliderChange}
            />
            <div className="w-full flex justify-between text-lg px-2">
                {generateSpans(props.min, props.max, props.step)}
            </div>
        </div>
    )
}

export function PersonalSliderBar(props) {
    const [sliderLiteral, setSliderLiteral] = useState(props.value);

    const handleSliderChange = (e) => {
        if (props.sentence === "true") {
            if (props.section === "addFelonyConvictions") {
                props.update_fn(addFelonyConvictionsABCSent[e.target.value]);
                setSliderLiteral(e.target.value);
            } else if (props.section === "priorAdultFelonyConvs") {
                props.update_fn(priorAdultFelonyConvictionsABCSent[e.target.value]);
                setSliderLiteral(e.target.value);
            } else if (props.section === "ClassCD") {
                props.update_fn(priorAdultFelonyCDConvs[e.target.value]);
                setSliderLiteral(e.target.value);
            }    
        } else {
            props.update_fn(e.target.value);
            setSliderLiteral(e.target.value);
        }
    }

    return (
        <div className={props.arrStyle}>
            <input 
            type="range" 
            min={props.min} 
            max={props.max} 
            step={props.step} 
            value={sliderLiteral}
            className="range range-secondary w-full" 
            onChange={handleSliderChange}
            />
            <div className="w-full flex justify-between text-lg px-2">
                {generateSpans(props.min, props.max, props.step)}
            </div>
        </div>
    )
}
