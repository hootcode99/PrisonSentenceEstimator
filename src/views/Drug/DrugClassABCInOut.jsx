import React, { useContext } from 'react';
import { DrugABCInOutProvider, DrugABCInOutContext } from '../../context/drug/DrugClassABCInOutContext';
import SliderSelect from '../../components/selectors/SliderSelect';
import RadioSelect from '../../components/selectors/RadioSelect';
import ResponsiveGrid from '../../components/ResponsiveGrid';
import ScoreSection from '../../components/ScoreSection';

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
            <ResponsiveGrid>
                <RadioSelect data={dataAdultFelonyConv} />
                <RadioSelect data={dataAdultMisdemeanorConv} />
                <RadioSelect data={dataPriorIncarceration} />
                <RadioSelect data={dataFelonyProbation} />
                <RadioSelect data={dataJuvenileDelinq} />
                <RadioSelect data={dataDeadlyWeapon} />
            </ResponsiveGrid>
            <div className="divider"/>
            <ScoreSection score={0}/>
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