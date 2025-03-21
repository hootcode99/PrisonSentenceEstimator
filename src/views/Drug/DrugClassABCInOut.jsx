import React, { useContext } from 'react';
import { DrugABCInOutProvider, DrugABCInOutContext } from '../../context/drug/DrugClassABCInOutContext';
import SliderSelect from '../../components/selectors/SliderSelect';

const DrugClassABCInOutView = () => {
    const { options, setPriorAdultFelonyConvictions } = useContext(DrugABCInOutContext);

    return (
        <div>
            <h1>Drug Class ABC - In/Out</h1>
            <SliderSelect
                title="Prior Adult Felony Convictions"
                options={options}
                onChange={setPriorAdultFelonyConvictions}
            />
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