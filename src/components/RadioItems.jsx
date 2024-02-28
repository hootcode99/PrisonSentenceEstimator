export function RadioSectionDropdown(props) {
    return (
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-lg font-medium">{props.title}</summary>
            <div className="collapse-content bg-base-100"> 

            {props.options.map((option, i) => {
                return (
                    <RadioButtonUnchecked text={option.text} key={i} value={option.value} update_fn={props.update_fn} name={props.group}/>
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
                    <RadioButtonChecked text={option.text} key={i} value={option.value} update_fn={props.update_fn} name={props.group}/>
                )
            } else {
                return (
                    <RadioButtonUnchecked text={option.text} key={i} value={option.value} update_fn={props.update_fn} name={props.group} />
                )
            }
        })}
        </>
    )
}

export function RadioButtonUnchecked(props) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text text-xl mx-5">{props.text}</span> 
                <input 
                key={props.i} 
                type="radio" 
                name={props.name} 
                className="radio checked:bg-blue-500" 
                onClick={() => props.update_fn(props.value)}/>
            </label>
        </div>
    )
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
                className="radio checked:bg-blue-500" 
                onClick={() => props.update_fn(props.value)} defaultChecked/>
            </label>
        </div>
    )
}



