import React, { useEffect, useState } from 'react';
import { getdrugABTableValue, getdrugCTableValue } from '../range_tables/drugTable.jsx';
// import { getPropertyABTableValue, getPropertyCTableValue, getPropertyDTableValue } from '../range_tables/propertyTable.jsx';
// import { getPersonalTableValue } from '../range_tables/personalTable.jsx';


export function SentenceRangeResult(props) {
    const [straight, setStraight] = useState({low: 0, mid: 0, high: 0});
    const [split, setSplit] = useState({low: 0, mid: 0, high: 0});

    useEffect(() => {
        // console.log(props.class_flag);
        if (props.type === "drug") {
            if (props.class_flag === "A" || props.class_flag === "B") {
                setStraight(getdrugABTableValue(props.score).Straight);
                console.log("straight", straight)
                setSplit(getdrugABTableValue(props.score).Split);
                console.log("split", split)
        
            } else if (props.class_flag === "C") {
                setStraight(getdrugCTableValue(props.score).Straight);
                console.log("straight", straight)
                setSplit(getdrugCTableValue(props.score).Split);
                console.log("split", split)
            
            } else if (props.class_flag === "D") {
                setStraight(getdrugDTableValue(props.score).Straight);
                setSplit(getdrugDTableValue(props.score).Split);
            }

        } else if (props.type === "property") {
            if (props.class_flag === "A" || props.class_flag === "B") {
                setStraight(getPropertyABTableValue(props.score).Straight);
                setSplit(getPropertyABTableValue(props.score).Split);
        
            } else if (props.class_flag === "C") {
                setStraight(getPropertyCTableValue(props.score).Straight);
                setSplit(getPropertyCTableValue(props.score).Split);
        
            } else if (props.class_flag === "D") {
                setStraight(getPropertyDTableValue(props.score).Straight);
                setSplit(getPropertyDTableValue(props.score).Split);
            }

        } else if (props.type === "personal") {
            setStraight(getPersonalTableValue(props.score).Straight);
            setSplit(getPersonalTableValue(props.score).Split);
        }
    }, [props.score]);

    return (
        <div className="flex h-20 bg-base-300 items-center rounded-box w-full justify-between">
            <p className="text-3xl mx-5 font-bold">Sent. Range</p>
            <p className="text-lg mx-5 text-accent">(Straight)</p>
            <div className="stat-value text-warning mx-5">{straight.low} - {straight.high}</div>
            <p className="text-lg mx-5 text-accent">(Split)</p>
            <div className="stat-value text-warning mx-5">{split.low} - {split.high}</div>
            
            <p className="text-3xl mx-5 font-bold">Total Score</p>
            <div className="stat-value text-warning mx-5">{props.score}</div>
        </div>
    )
}