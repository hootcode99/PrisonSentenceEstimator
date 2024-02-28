import React, { useEffect, useState } from 'react';
import { RadioSection, RadioButtonChecked, RadioButtonUnchecked, RadioSectionDropdown } from '../components/RadioItems';
import { SectionHeader, Divider, TwoColumnWrapper, RadioSectionWrapper, StackingDiv } from '../components/PageSectionItems';
import { SliderBar } from '../components/SliderItems';

const classOptions =  {
        A: [{text: "Manufacturing Controlled Substance (1st)", value: 8}, 
            {text: "A/S/C Manufacturing Controlled Substance (1st)", value: 8}],

        B: [{text: "Manufacturing Controlled Substance (2nd)", value: 5},
            {text: "A/S/C Manufacturing Controlled Substance (2nd)", value: 5},
            {text: "Possession with Intent to Distribute Controlled Substance", value: 5},
            {text: "A/S/C Possesssion with Intent to Distribute Controlled Substance", value: 5},
            {text: "Sale/Distribution of Marihuana (other than to minor)", value: 6},
            {text: "A/S/C Sale/Distribution of Marihuana (other than to minor)", value: 6},
            {text: "Sale/Distribution of Schedule I-V (other than to minor)", value: 6},
            {text: "A/S/C Sale/Distribution of Schedule I-V (other than to minor)", value: 6}], 

        C: [{text: "Felony DUI", value: 4},
            {text: "Poss of Marihuana 1st §13A-12-213(a)(1)", value: 2},
            {text: "A/S/C Poss of Marihuana 1st §13A-12-213(a)(1)", value: 2}]
    };

const misdemeanorOptions = [
    {text: "0-1", value: 0},
    {text: "2-5", value: 1},
    {text: "6-9", value: 2},
    {text: "10+", value: 3},
];

const priorIncarcerationOptions = [{text: "None or <1 year", value: 0}, {text: "1 year or more", value: 3}];
const priorParoleViolationOptions = [{text: "None", value: 0}, {text: "1 or more", value: 1}];
const priorJuvenileOptions = [{text: "None", value: 0}, {text: "1-2", value: 1}, {text: "3-4", value: 2}, {text: "5+", value: 3}];
const deadlyWeaponOptions = [{text: "No", value: 0}, {text: "Yes", value: 2}];

export default function DrugWorksheetABC_InOut() {
    const [mostSeriousConv, setMostSeriousConv] = useState(0);
    const [priorAdultFelonyConvs, setPriorAdultFelonyConvs] = useState(0);
    const [priorAdultMisdemeanorConvs, setPriorAdultMisdemeanorConvs] = useState(0);
    const [priorIncarceration, setPriorIncarceration] = useState(0);
    const [priorParoleViolation, setPriorParoleViolation] = useState(0);
    const [PriorJuvenileFelonyAdj, setPriorJuvenileFelonyAdj] = useState(0);
    const [useDeadlyWeapon, setUseDeadlyWeapon] = useState(0);
    const [sumTotal, setSumTotal] = useState(0);

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
        <>
        <div className="grid h-20 card bg-base-300 place-items-center text-4xl font-bold">Drug Offense In/Out Worksheet - Class A/B/C</div>
        <div className="flex flex-col w-full place-items-center">

            <Divider modifier="top" />
            
            <SectionHeader title="Most Serious Conviction Offense" score={mostSeriousConv} subtext="" />
            <div className="flex flex-col w-4/5">
                <RadioSectionDropdown title="Class A" options={classOptions.A} update_fn={setMostSeriousConv} group="most-serious-offense" />
                <RadioSectionDropdown title="Class B" options={classOptions.B} update_fn={setMostSeriousConv} group="most-serious-offense" />
                <RadioSectionDropdown title="Class C" options={classOptions.C} update_fn={setMostSeriousConv} group="most-serious-offense" />
            </div>

            <Divider />

            <TwoColumnWrapper>
                <StackingDiv>
                    <SectionHeader mod="half" title="Prior Adult Felony Convictions" score={priorAdultFelonyConvs} subtext="" />
                    <SliderBar column="true" value={priorAdultFelonyConvs} update_fn={setPriorAdultFelonyConvs}/>
                </StackingDiv>

                    <Divider modifier="horizontal"/>

                <StackingDiv>
                    <SectionHeader mod="half" title="Prior Adult Convictions for Misdemeanors or Violations" score={priorAdultMisdemeanorConvs} subtext="" />
                    <div className='flex mt-4'>
                        <RadioSectionWrapper>
                            <RadioSection title="Select" options={misdemeanorOptions} update_fn={setPriorAdultMisdemeanorConvs} group="misdemeanor-group" />
                        </RadioSectionWrapper>
                    </div>
                </StackingDiv>
            </TwoColumnWrapper>

            <Divider />

            <TwoColumnWrapper>
                <StackingDiv>
                    <SectionHeader mod="half" title="Prior Incarceration w/Unsuspended Sentence" score={priorIncarceration} subtext="" />
                    <RadioSectionWrapper>
                        <RadioSection title="Select" options={priorIncarcerationOptions} update_fn={setPriorIncarceration} group="prior-incarceration" />
                    </RadioSectionWrapper>
                </StackingDiv>

                <Divider modifier="horizontal" />

                <StackingDiv>
                    <SectionHeader mod="half" title="Prior Felony Probation or Parole Revocation" score={priorParoleViolation} subtext="" />
                    <RadioSectionWrapper>
                        <RadioSection title="Select" options={priorParoleViolationOptions} update_fn={setPriorParoleViolation} group="prior-felony" />
                    </RadioSectionWrapper>
                </StackingDiv>
            </TwoColumnWrapper>

            <Divider />

            <TwoColumnWrapper>
                <StackingDiv>
                    <SectionHeader mod="half" title="Prior Juvenile Delinquency or YO Adjudications" score={PriorJuvenileFelonyAdj} subtext="(Violation/Misdemeanor/Felony)" />
                    <RadioSectionWrapper>
                        <RadioSection options={priorJuvenileOptions} update_fn={setPriorJuvenileFelonyAdj} group="prior-juvenile" />
                    </RadioSectionWrapper>
                </StackingDiv>
                <Divider modifier="horizontal" />
                <StackingDiv>
                    <SectionHeader mod="half" title="Possession/Use of a Deadly Weapon or Dangerous Instrument" score={useDeadlyWeapon} subtext="" />
                    <RadioSectionWrapper>
                        <RadioSection options={deadlyWeaponOptions} update_fn={setUseDeadlyWeapon} group="use-weapon" />
                    </RadioSectionWrapper>
                </StackingDiv>
            </TwoColumnWrapper>
            <Divider modifier="bottom" />

            <div className="flex w-4/5">
                <SectionHeader title="Total Score" score={sumTotal} subtext="8 or more points = Prison" mod="last"/>
            </div>
        </div>
        </>
    )
}
