import { SentenceRangeResult } from "./SentenceRangeResult"

export function SectionHeader(props){
    if (props.mod === "score"){
        let score_style = "stat-value text-success mx-5"
        let subtext_style = "text-lg mx-5 text-base-content"
        if (props.score >= 8) {
            score_style = "stat-value text-error mx-5"
            subtext_style = "text-lg mx-5 text-error"
        }
        return (
            <div className="flex h-20 bg-base-300 items-center rounded-box w-full justify-between">
                <p className="text-3xl mx-5 font-bold">Total Score</p>
                <p className={subtext_style}>8 or more points = Prison</p>
                <div className={score_style}>{props.score}</div>
            </div>
        )
    
    } else if (props.mod === "sentence") {
        return (
            <SentenceRangeResult score={props.score} class_flag={props.class_flag} type={props.type}/>
        )
    
    } else if (props.mod === "half"){
        return (
            <div className="flex h-20 bg-base-300 items-center rounded-box w-full justify-between">
                <p className="text-2xl mx-5">{props.title}</p>
                <p className="text-md mx-5 text-warning">{props.subtext}</p>
                <div className="stat-value text-info mx-5">{props.score}</div>
            </div>
        )

    } else if (props.mod === "uneven"){
        return (
            <div className="flex h-20 bg-base-300 justify-center rounded-box w-full justify-between">
                <p className="text-2xl mx-5">{props.title}</p>
                <p className="text-lg mx-5 text-warning">{props.subtext}</p>
                <div className="stat-value text-info mx-5">{props.score}</div>
            </div>
        )
    
    } else {
        return (
            <div className="flex h-20 mx-5 bg-base-300 items-center rounded-box w-4/5 justify-between">
                <p className="text-2xl mx-5">{props.title}</p>
                <p className="text-lg mx-5 text-warning">{props.subtext}</p>
                <div className="stat-value text-info mx-5">{props.score}</div>
            </div>
        )
    }


}

export function Divider(props) {
    if (props.modifier === "top"){
        return (            
        <div className="justify-center items-center w-4/5">
            <div className="divider divider-info"></div>
        </div>
        )

    } else if (props.modifier === "bottom") {
        return (            
        <div className="justify-center items-center w-4/5">
            <div className="divider divider-info"></div>
        </div>
        )

    } else if (props.modifier === "horizontal") {
        return (            
            <div className="divider divider-horizontal"></div>
        )

    } else {
        return (
            <div className="justify-center items-center w-4/5">
                <div className="divider divider-neutral"></div>
            </div>
        )
    }
}


export function TwoColumnWrapper(props) {
    return (
        <div className='flex w-4/5 place-items-center'>{props.children}</div>
    )
}

export function RadioSectionWrapper(props){
    return (
        <div className="flex justify-center space-x-10 w-full mt-3">{props.children}</div>
    )
}

export function StackingDiv(props){
    return (
        <div className="flex-col w-full">{props.children}</div>
    )
}
