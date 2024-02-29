import React, { useEffect, useState } from 'react';

import { 
    TwoRadioSection, 
    SliderRadioSection, 
    ScoreSection, 
    ClassSelectionSection 
} from '../components/PageSections';

import { Divider } from '../components/PageSectionItems';

import { 
    classOptionsABCScore, 
    misdemeanorOptionsABCScore, 
    priorIncarcerationOptionsABCScore, 
    priorJuvenileOptionsABCScore, 
    priorParoleViolationOptionsABCScore, 
    deadlyWeaponOptionsABCScore 
} from '../options_data/drugOptionsABC';

export default function DrugWorksheetABC_InOut() {
    {/*Hooks for each section's value and the sum of all values*/}
    const [mostSeriousConv, setMostSeriousConv] = useState(0);
    const [priorAdultFelonyConvs, setPriorAdultFelonyConvs] = useState(0);
    const [priorAdultMisdemeanorConvs, setPriorAdultMisdemeanorConvs] = useState(0);
    const [priorIncarceration, setPriorIncarceration] = useState(0);
    const [priorParoleViolation, setPriorParoleViolation] = useState(0);
    const [PriorJuvenileFelonyAdj, setPriorJuvenileFelonyAdj] = useState(0);
    const [useDeadlyWeapon, setUseDeadlyWeapon] = useState(0);
    
    const [sumTotal, setSumTotal] = useState(0);

    {/*Get the sum of the selected values on the page*/}
    useEffect(() => {
        setSumTotal(
            Number(mostSeriousConv) + 
            Number(priorAdultFelonyConvs) + 
            Number(priorAdultMisdemeanorConvs) + 
            Number(priorIncarceration) + 
            Number(priorParoleViolation) + 
            Number(PriorJuvenileFelonyAdj) + 
            Number(useDeadlyWeapon)
        );
    }, [mostSeriousConv, priorAdultFelonyConvs, priorAdultMisdemeanorConvs, priorIncarceration, 
        priorParoleViolation, PriorJuvenileFelonyAdj, useDeadlyWeapon]);

    return (
        <div className="flex flex-col w-full place-items-center">

            <Divider modifier="top" />

            <ClassSelectionSection 
            title="Most Serious Conviction Offense"
            score={mostSeriousConv}
            optionsA={classOptionsABCScore.A}
            optionsB={classOptionsABCScore.B}
            optionsC={classOptionsABCScore.C}
            update_fn={setMostSeriousConv}
            sentence={false}
            group="most-serious-offense"
            />

            <Divider />

            <SliderRadioSection 
            column="true"
            type="drug" 
            sentence="false"
            titleSlider="Prior Adult Felony Convictions"
            scoreSlider={priorAdultFelonyConvs}
            subtextSlider=""
            min="0" max="5" step="1"
            valueSlider={priorAdultFelonyConvs}
            update_fnSlider={setPriorAdultFelonyConvs}
 

            titleRadio="Prior Adult Convictions for Misdemeanors/Violations"
            scoreRadio={priorAdultMisdemeanorConvs}
            subtextRadio=""
            optionsRadio={misdemeanorOptionsABCScore}   
            update_fnRadio={setPriorAdultMisdemeanorConvs}
            groupRadio="misdemeanor-group"
            />

            <Divider />

            <TwoRadioSection 
            titleA="Prior Incarceration w/Unsuspended Sentence" 
            scoreA={priorIncarceration} 
            optionsA={priorIncarcerationOptionsABCScore}
            update_fnA={setPriorIncarceration} 
            groupA="prior-incarceration" 
            
            titleB="Prior Felony Probation/Parole Revocation"
            scoreB={priorParoleViolation}
            optionsB={priorParoleViolationOptionsABCScore}
            update_fnB={setPriorParoleViolation}
            groupB="prior-felony"/>

            <Divider />

            <TwoRadioSection 
            titleA="Prior Juvenile Delinquency or YO Adjudications" 
            scoreA={PriorJuvenileFelonyAdj}
            subtextA="(Violation/Misdemeanor/Felony)"
            optionsA={priorJuvenileOptionsABCScore}
            update_fnA={setPriorJuvenileFelonyAdj}
            groupA="prior-juvenile" 
            
            titleB="Poss/Use of a Deadly Weapon or Dangerous Instrument"
            scoreB={useDeadlyWeapon}
            optionsB={deadlyWeaponOptionsABCScore}
            update_fnB={setUseDeadlyWeapon}
            groupB="use-weapon"/>
            
            <Divider modifier="bottom" />

            <ScoreSection title="Total Score" score={sumTotal} mod="score"/>
        </div>
    )
}
