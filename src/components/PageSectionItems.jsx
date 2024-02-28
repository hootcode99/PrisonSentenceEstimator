export function SectionHeader(props){

    if (props.last === "true"){
        return (
            <div className="flex h-20 bg-base-300 items-center rounded-box w-full justify-between">
                <p className="text-2xl mx-5">{props.title}</p>
                <p className="text-lg mx-5 float-right text-error">{props.subtext}</p>
                <div className="stat-value text-primary mx-5">{props.score}</div>
            </div>
        )

    } else {
        return (
            <div className="flex h-20 mx-5 bg-base-300 items-center rounded-box w-4/5 justify-between">
                <p className="text-2xl mx-5 ">{props.title}</p>
                <p className="text-lg mx-5 float-right text-warning">{props.subtext}</p>
                <div className="stat-value text-primary mx-5">{props.score}</div>
            </div>
        )
    }


}