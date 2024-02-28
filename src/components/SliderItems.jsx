export function SliderBar(props) {

    const handleSliderChange = (e) => {
        props.update_fn(e.target.value);
    }

    if (props.column === "true"){
        return (
            <div className="flex flex-col mt-5">
            <input type="range" min='0' max='5' value={props.value} className="range w-full" step="1" onChange={handleSliderChange}/>
            <div className="w-full flex justify-between text-lg px-2">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5+</span>
            </div>
        </div>
        )
    } else {

        return (
            <div className="flex flex-col w-4/5 mt-5">
            <input type="range" min='0' max='5' value={props.value} className="range w-full" step="1" onChange={handleSliderChange}/>
            <div className="w-full flex justify-between text-lg px-2">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5+</span>
            </div>
        </div>
        )
    }
}