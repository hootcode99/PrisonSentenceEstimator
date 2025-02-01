import React, { useEffect, useState } from 'react';

import { 
    TwoRadioSection, 
    SliderRadioSection, 
    ScoreSection, 
    ClassSelectionSection, 
    TwoSliderSection
} from '../components/PageSections';

import { 
    SectionHeader, 
    Divider, 
    TwoColumnWrapper, 
    RadioSectionWrapper, 
    StackingDiv 
} from '../components/PageSectionItems';

import { 
    classOptionsABCSent, 
    priorIncarcerationUnsuspendedABCSent,
    priorAdultFelonyCDConvsABCSent
} from '../options_data/drugOptionsABC';

export default function DrugWorksheetABC_SentenceLength() {
    {/*Hooks for each section's value and the sum of all values*/}
    const [mostSeriousConv, setMostSeriousConv] = useState(0);
    const [addFelonyConvictions, setAddFelonyConvictions] = useState(0);
    const [priorAdultFelonyConvs, setPriorAdultFelonyConvs] = useState(0);
    const [priorAdultFelonyCDConvs, setPriorAdultFelonyCDConvs] = useState(0);
    const [priorIncarceration, setPriorIncarceration] = useState(0);

    const [classFlag, setClassFlag] = useState("X");
    const [sumTotal, setSumTotal] = useState(0);

    {/*Get the sum of the selected values on the page*/}
    useEffect(() => {
        setSumTotal(
            Number(mostSeriousConv) + 
            Number(addFelonyConvictions) + 
            Number(priorAdultFelonyConvs) + 
            Number(priorAdultFelonyCDConvs) +
            Number(priorIncarceration)
        );
    }, [mostSeriousConv, addFelonyConvictions, priorAdultFelonyConvs, priorAdultFelonyCDConvs, priorIncarceration]);

    return (
        <div className="flex flex-col w-full place-items-center">

            <Divider modifier="top" />

            <ClassSelectionSection 
            title="Most Serious Conviction Offense"
            score={mostSeriousConv}
            optionsA={classOptionsABCSent.A}
            optionsB={classOptionsABCSent.B}
            optionsC={classOptionsABCSent.C}
            update_fn={setMostSeriousConv}
            group="most-serious-offense"
            sentence={true}
            update_fn_class={setClassFlag}
            />

            <Divider />

            <TwoSliderSection 
            column="true"
            sentence="true"
            type="drug"

            titleA="Additional Felony Convictions"
            sectionA="addFelonyConvictions"
            scoreA={addFelonyConvictions}
            subtextA=""
            minA="0" maxA="4" stepA="1"
            valueA={addFelonyConvictions}
            update_fnA={setAddFelonyConvictions}

            sectionB="priorAdultFelonyConvs"
            titleB="Prior Adult Felony Convictions"
            scoreB={priorAdultFelonyConvs}
            subtextB=""
            minB="0" maxB="5" stepB="1"
            valueB={priorAdultFelonyConvs}
            update_fnB={setPriorAdultFelonyConvs}
            />

            <Divider />

            <SliderRadioSection 
            column="true"
            type="drug" 
            sentence="true"
            section="ClassCD"
            titleSlider="Prior Adult Felony Convictions Class C/D"
            scoreSlider={priorAdultFelonyCDConvs}
            subtextSlider=""
            min="0" max="7" step="1"
            valueSlider={priorAdultFelonyCDConvs}
            update_fnSlider={setPriorAdultFelonyCDConvs}
 

            titleRadio="Prior Incarceration with Unsuspended Sentence"
            scoreRadio={priorIncarceration}
            subtextRadio=""
            optionsRadio={priorIncarcerationUnsuspendedABCSent}   
            update_fnRadio={setPriorIncarceration}
            groupRadio="incarceration-group"
            />

            <Divider modifier="bottom" />

            <ScoreSection score={sumTotal} mod="sentence" type="drug" class_flag={classFlag}/>
        </div>

    )
}
