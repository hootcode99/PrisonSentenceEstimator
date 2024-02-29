// These are the selection-value mappings for options that are radio button or range selection (but not consistent in value).

//-------------------------------------------------------------------------------- PRISON SCORE OPTIONS
export const classOptionsABCScore =  {
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

export const misdemeanorOptionsABCScore = [
{text: "0-1", value: 0},
{text: "2-5", value: 1},
{text: "6-9", value: 2},
{text: "10+", value: 3},
];

export const priorIncarcerationOptionsABCScore = [{text: "None or <1 year", value: 0}, {text: "1 year or more", value: 3}];
export const priorParoleViolationOptionsABCScore = [{text: "None", value: 0}, {text: "1 or more", value: 1}];
export const priorJuvenileOptionsABCScore = [{text: "None", value: 0}, {text: "1-2", value: 1}, {text: "3-4", value: 2}, {text: "5+", value: 3}];
export const deadlyWeaponOptionsABCScore = [{text: "No", value: 0}, {text: "Yes", value: 2}];

//-------------------------------------------------------------------------------- SENTENCE LENGTH OPTIONS
export const classOptionsABCSent = {
    A: [{text: "Manufacturing Controlled Substance (1st)", value: 286}, 
        {text: "A/S/C Manufacturing Controlled Substance (1st)", value: 286}],

    B: [{text: "Manufacturing Controlled Substance (2nd)", value: 105},
        {text: "A/S/C Manufacturing Controlled Substance (2nd)", value: 105},
        {text: "Possession with Intent to Distribute Controlled Substance", value: 105},
        {text: "A/S/C Possesssion with Intent to Distribute Controlled Substance", value: 105},
        {text: "Sale/Distribution of Marihuana (other than to minor)", value: 84},
        {text: "A/S/C Sale/Distribution of Marihuana (other than to minor)", value: 84},
        {text: "Sale/Distribution of Schedule I-V (other than to minor)", value: 113},
        {text: "A/S/C Sale/Distribution of Schedule I-V (other than to minor)", value: 113}], 

    C: [{text: "Felony DUI", value: 76},
        {text: "Poss of Marihuana 1st §13A-12-213(a)(1)", value: 71},
        {text: "A/S/C Poss of Marihuana 1st §13A-12-213(a)(1)", value: 71}]
};

export const priorIncarcerationUnsuspendedABCSent = [{text: "None or <1 year", value: 0}, {text: "1 year or more", value: 14}];
export const addFelonyConvictionsABCSent = {0: 0, 1: 15, 2: 29, 3: 44, 4: 58}
export const priorAdultFelonyConvictionsABCSent = {0: 0, 1:10, 2: 20, 3: 30, 4: 40, 5: 50}
export const priorAdultFelonyCDConvsABCSent = {0: 0, 1: 7, 2: 14, 3: 21, 4: 28, 5: 35, 6: 43, 7: 50}