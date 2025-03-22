import React, { useContext } from 'react';
import { DrugABCInOutProvider, DrugABCInOutContext } from '../../context/drug/DrugClassABCInOutContext';
import SliderSelect from '../../components/selectors/SliderSelect';
import RadioSelect from '../../components/selectors/RadioSelect';

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
            <RadioSelect data={dataAdultFelonyConv} />
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