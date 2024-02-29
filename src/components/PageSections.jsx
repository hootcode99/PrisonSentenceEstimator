import { SectionHeader, Divider, TwoColumnWrapper, RadioSectionWrapper, StackingDiv } from '../components/PageSectionItems';
import { RadioSection, RadioButtonChecked, RadioButtonUnchecked, RadioSectionDropdown } from '../components/RadioItems';
import { SliderTypeRouter } from '../components/SliderTypeRouter';


{
/* 
This component represents the dropdown section of the app
For class A,B,C scenarios, each recieves a dropdown selector
but all radio buttons are in the same group as only one can be selected.
*/
}
export function ClassSelectionSection(props) {
    return (
        <>
        <SectionHeader 
        title={props.title} 
        score={props.score} 
        subtext="" 
        />
        <div className="flex flex-col w-4/5">
            <RadioSectionDropdown 
            title="Class A" 
            options={props.optionsA} 
            update_fn={props.update_fn} 
            group={props.group} 
            update_fn_class={props.update_fn_class}
            sentence={props.sentence}
            />
            <RadioSectionDropdown 
            title="Class B" 
            options={props.optionsB} 
            update_fn={props.update_fn} 
            group={props.group} 
            update_fn_class={props.update_fn_class}
            sentence={props.sentence}
            />
            <RadioSectionDropdown 
            title="Class C" 
            options={props.optionsC} 
            update_fn={props.update_fn} 
            group={props.group} 
            update_fn_class={props.update_fn_class}
            sentence={props.sentence}
            />
        </div>
        </>
    )
}

{
/* 
This component represents sections of the app that are
two radio selectors side by side
*/
}
export function TwoRadioSection(props){
    return (
        <TwoColumnWrapper>
            <StackingDiv>
                <SectionHeader 
                mod="half" 
                title={props.titleA} 
                score={props.scoreA} 
                subtext={props.subtextA} 
                />
                <RadioSectionWrapper>
                    <RadioSection 
                    title="Select" 
                    options={props.optionsA} 
                    update_fn={props.update_fnA} 
                    group={props.groupA} 
                    />
                </RadioSectionWrapper>
            </StackingDiv>

            <Divider modifier="horizontal" />

            <StackingDiv>
                <SectionHeader 
                mod="half" 
                title={props.titleB} 
                score={props.scoreB} 
                subtext={props.subtextB} 
                />
                <RadioSectionWrapper>
                    <RadioSection 
                    title="Select" 
                    options={props.optionsB} 
                    update_fn={props.update_fnB} 
                    group={props.groupB} 
                    />
                </RadioSectionWrapper>
            </StackingDiv>
        </TwoColumnWrapper>
    )
}

{
/* 
This component represents sections of the app that are
two slider bar selectors side by side
*/
}
export function TwoSliderSection(props){
    return (
        <TwoColumnWrapper>
            <StackingDiv>
                <SectionHeader 
                mod="half" 
                title={props.titleA} 
                score={props.scoreA} 
                subtext={props.subtextA} 
                />
                <SliderTypeRouter
                section={props.sectionA}
                sentence={props.sentence} 
                type={props.type}
                column={props.column} 
                min={props.minA} 
                max={props.maxA} 
                step={props.stepA} 
                value={props.valueA} 
                update_fn={props.update_fnA}
                />
            </StackingDiv>

            <Divider modifier="horizontal"/>

            <StackingDiv>
                <SectionHeader 
                mod="half" 
                title={props.titleB} 
                score={props.scoreB} 
                subtext={props.subtextB} 
                />
                <SliderTypeRouter 
                section={props.sectionB}
                sentence={props.sentence} 
                type={props.type}
                column={props.column} 
                min={props.minB} 
                max={props.maxB} 
                step={props.stepB} 
                value={props.valueB} 
                update_fn={props.update_fnB}
                />
            </StackingDiv>
        </TwoColumnWrapper>
    )

}

{
/* 
This component represents sections of the app that are a 
slider bar next to a radio selection
*/
}
export function SliderRadioSection(props){
    return (
        <TwoColumnWrapper>
            <StackingDiv>
                <SectionHeader 
                mod="half" 
                title={props.titleSlider} 
                score={props.scoreSlider} 
                subtext={props.subtextSlider} 
                />
                <SliderTypeRouter 
                column="true"
                section={props.section}
                sentence={props.sentence}
                type={props.type}
                min={props.min} 
                max={props.max} 
                step={props.step} 
                value={props.valueSlider} 
                update_fn={props.update_fnSlider}
                />
            </StackingDiv>

            <Divider modifier="horizontal"/>

            <StackingDiv>
                <SectionHeader 
                mod="half" 
                title={props.titleRadio} 
                score={props.scoreRadio} 
                subtext={props.subtextRadio} 
                />
                <div className='flex mt-4'>
                    <RadioSectionWrapper>
                        <RadioSection 
                        title="Select" 
                        options={props.optionsRadio} 
                        update_fn={props.update_fnRadio} 
                        group={props.groupRadio} 
                        />
                    </RadioSectionWrapper>
                </div>
            </StackingDiv>
        </TwoColumnWrapper>
    )
}

{
/* 
This component represents the scoring section of each page at the bottom
*/
}
export function ScoreSection(props) {
    return (
        <div className="flex w-4/5">
            <SectionHeader {...props} />
        </div>
    )
}
