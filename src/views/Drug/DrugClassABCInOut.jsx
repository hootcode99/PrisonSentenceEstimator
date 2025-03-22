import React, { useContext } from 'react';
import { DrugABCInOutProvider, DrugABCInOutContext } from '../../context/drug/DrugClassABCInOutContext';
import SliderSelect from '../../components/selectors/SliderSelect';
import RadioSelect from '../../components/selectors/RadioSelect';
import ResponsiveGrid from '../../components/ResponsiveGrid';

const DrugClassABCInOutView = () => {
    const { 
        dataAdultFelonyConv,
        dataAdultMisdemeanorConv,
        dataPriorIncarceration,
        dataFelonyProbation,
        dataJuvenileDelinq,
        dataDeadlyWeapon,
     } = useContext(DrugABCInOutContext);

    return (
        <div>
            <h1>Drug Class ABC - In/Out</h1>
            <ResponsiveGrid>
                <RadioSelect data={dataAdultFelonyConv} />
                <RadioSelect data={dataAdultMisdemeanorConv} />
                <RadioSelect data={dataPriorIncarceration} />
                <RadioSelect data={dataFelonyProbation} />
                <RadioSelect data={dataJuvenileDelinq} />
                <RadioSelect data={dataDeadlyWeapon} />
            </ResponsiveGrid>
        </div>
    );
};

const DrugClassABCInOut = () => {
    return (
        <DrugABCInOutProvider>
            <DrugClassABCInOutView />
        </DrugABCInOutProvider>
    );
};

export default DrugClassABCInOut;