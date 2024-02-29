import { DrugSliderBar } from "./SliderItems"

// This component wraps determine which sliderbar type to render and which arrangement style to apply
export function SliderTypeRouter(props) {
    let arrangementStyle = ""
    if (props.column === "true"){
        arrangementStyle = "flex flex-col mt-5"
    } 

    if (props.type === "drug") {
        return (
            <DrugSliderBar {...props} arrStyle={arrangementStyle}  />
        )
    } else if (props.type === "property") {
        return (
            <PropertySliderBar {...props} arrStyle={arrangementStyle} />
        )
    } else {
        return (
            <PersonalSliderBar {...props} arrStyle={arrangementStyle} />
        )
    }
}