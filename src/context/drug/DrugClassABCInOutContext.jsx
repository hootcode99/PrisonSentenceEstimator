import React, { createContext, useState } from 'react';

import { ABCInOutSelectOptions } from '../../options_data/drugOptionsABC';
// Create the context
export const DrugABCInOutContext = createContext();

// Create the provider component
export const DrugABCInOutProvider = ({ children }) => {
    const [scoreAdultFelonyConv, setScoreAdultFelonyConv] = useState(0);
    const [scoreAdultMisdemeanorConv, setScoreAdultMisdemeanorConv] = useState(0);
    const [scorePriorIncarceration, setScorePriorIncarceration] = useState(0);
    const [scoreFelonyProbation, setScoreFelonyProbation] = useState(0);
    const [scoreJuvenileDelinq, setScoreJuvenileDelinq] = useState(0);
    const [scoreDeadlyWeapon, setScoreDeadlyWeapon] = useState(0);

    const dataAdultFelonyConv = {
        title: "Prior Adult Felony Convictions",
        options: ABCInOutSelectOptions.valuesAdultFelonyConv,
        value: scoreAdultFelonyConv,
        setter: setScoreAdultFelonyConv,
    };

    const dataAdultMisdemeanorConv = {
        title: "Prior Adult Misdemeanor/Violation Convictions",
        options: ABCInOutSelectOptions.valuesAdultMisdemeanorConv,
        value: scoreAdultMisdemeanorConv,
        setter: setScoreAdultMisdemeanorConv,
    };

    const dataPriorIncarceration = {
        title: "Prior Incarceration w/Unsuspended Sentence",
        options: ABCInOutSelectOptions.valuesPriorIncarceration,
        value: scorePriorIncarceration,
        setter: setScorePriorIncarceration,
    };

    const dataFelonyProbation = {
        title: "Prior Felony Probation/Parole Revocation",
        options: ABCInOutSelectOptions.valuesFelonyProbation,
        value: scoreFelonyProbation,
        setter: setScoreFelonyProbation,
    };

    const dataJuvenileDelinq = {
        title: "Prior Juvenile Delinquency or YO Adjudications",
        options: ABCInOutSelectOptions.valuesJuvenileDelinq,
        value: scoreJuvenileDelinq,
        setter: setScoreJuvenileDelinq,
    };

    const dataDeadlyWeapon = {
        title: "Poss./Use of Deadly Weapon/Dangerous Instrument",
        options: ABCInOutSelectOptions.valuesDeadlyWeapon,
        value: scoreDeadlyWeapon,
        setter: setScoreDeadlyWeapon,
    };

    return (
        <DrugABCInOutContext.Provider value={{ 
            dataAdultFelonyConv,
            dataAdultMisdemeanorConv,
            dataPriorIncarceration,
            dataFelonyProbation,
            dataJuvenileDelinq,
            dataDeadlyWeapon,
        }}>
            {children}
        </DrugABCInOutContext.Provider>
    );
};