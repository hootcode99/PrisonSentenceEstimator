import React from 'react'

const SliderSelect = ({ title, options, onChange }) => {
    const {start, stop, step, value} = options;

    // generate arrays to use to render the spans
    const range = Array.from(
        { length: Math.floor((stop - start) / step) + 1 },
        (_, i) => start + i * step
    );

    const onChangeHandler = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="w-full max-w-xs">
                        <input type="range" min={start} max={stop} value={value} className="range" step={step} onChange={onChangeHandler}/>
                        <div className="flex justify-between px-2.5 mt-2 text-xs">
                        {range.map((_, index) => (
                                <span key={index}>|</span>
                            ))}
        
                        </div>
                        <div className="flex justify-between px-2.5 mt-2 text-xs">
                            {range.map((val, index) => (
                                <span key={index}>{val}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SliderSelect;


