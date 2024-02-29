import React, { useState } from 'react';

export function RadioSectionDropdown(props) {
    const [class_type, setClassType] = useState(props.title[props.title.length - 1]);

    return (
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-lg font-medium">{props.title}</summary>
            <div className="collapse-content bg-base-100"> 

            {props.options.map((option, i) => {
                return (
                    <RadioButtonUnchecked 
                    dropdown={true}
                    text={option.text} 
                    key={i} 
                    value={option.value} 
                    update_fn={props.update_fn} 
                    name={props.group}
                    class_type={class_type} 
                    sentence={props.sentence}
                    {...(props.sentence ? { update_fn_class: props.update_fn_class} : {}) }
                    />
                )
            })}

            </div>
        </details>
    )
}

export function RadioSection(props) {
    return (
        <>
        {props.options.map((option, i) => {
            if (i === 0) {
                return (
                    <RadioButtonChecked 
                    text={option.text} 
                    key={i} 
                    value={option.value} 
                    update_fn={props.update_fn} 
                    name={props.group}
                    />
                )
            } else {
                return (
                    <RadioButtonUnchecked 
                    text={option.text} key={i} 
                    value={option.value} 
                    update_fn={props.update_fn} 
                    name={props.group} 
                    />
                )
            }
        })}
        </>
    )
}

export function RadioButtonUnchecked(props) {
    if (props.dropdown === true && props.sentence === true) {
        const handleDropdownClick = (e, value) => {
            props.update_fn(value);
            props.update_fn_class(e.target.dataset.group);
        }

        return (
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-xl mx-5">{props.text}</span> 
                    <input 
                    key={props.i} 
                    type="radio" 
                    name={props.name} 
                    className="radio checked:bg-secondary" 
                    data-group={props.class_type}
                    onClick={(e) => handleDropdownClick(e, props.value)}/>
                </label>
            </div>
        )

    } else {
        return (
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-xl mx-5">{props.text}</span> 
                    <input 
                    key={props.i} 
                    type="radio" 
                    name={props.name} 
                    className="radio checked:bg-secondary" 
                    onClick={() => props.update_fn(props.value)}/>
                </label>
            </div>
        )
    }

}

export function RadioButtonChecked(props) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text text-xl mx-5">{props.text}</span> 
                <input 
                key={props.i} 
                type="radio" 
                name={props.name}
                className="radio checked:bg-secondary" 
                onClick={() => props.update_fn(props.value)} defaultChecked/>
            </label>
        </div>
    )
}



