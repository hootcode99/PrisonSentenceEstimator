import HomePage from '../views/HomePage'
import DrugClassABCInOut from '../views/Drug/DrugClassABCInOut'
import DrugClassABCSentenceLength from '../views/Drug/DrugClassABCSentenceLength'
import DrugClassDInOut from '../views/Drug/DrugClassDInOut'
import DrugClassDSentenceLength from '../views/Drug/DrugClassDSentenceLength'
import PropertyClassABCInOut from '../views/Property/PropertyClassABCInOut'
import PropertyClassABCSentenceLength from '../views/Property/PropertyClassABCSentenceLength'
import PropertyClassDInOut from '../views/Property/PropertyClassDInOut'
import PropertyClassDSentenceLength from '../views/Property/PropertyClassDSentenceLength'
import PersonalInOut from '../views/Personal/PersonalInOut'
import PersonalSentenceLength from '../views/Personal/PersonalSentenceLength'

const routes = [
    {
        title: 'Home',
        path: '/', 
        element: HomePage,
    }, 
    {
        title: 'Drug Worksheet ABC In/Out',
        path: '/drug/class-abc-in-out',
        element: DrugClassABCInOut,
    },
    {
        title: 'Drug Worksheet ABC Sentence Length',
        path: '/drug/class-abc-sentence-length',
        element: DrugClassABCSentenceLength,
    },
    {
        title: 'Drug Worksheet D In/Out',
        path: '/drug/class-d-in-out',
        element: DrugClassDInOut,
    },
    {
        title: 'Drug Worksheet D Sentence Length',
        path: '/drug/class-d-sentence-length',
        element: DrugClassDSentenceLength,
    },
    {
        title: 'Property Worksheet ABC In/Out',
        path: '/property/class-abc-in-out',
        element: PropertyClassABCInOut,
    },
    {
        title: 'Property Worksheet ABC Sentence Length',
        path: '/property/class-abc-sentence-length',
        element: PropertyClassABCSentenceLength,
    },
    {
        title: 'Property Worksheet D In/Out',
        path: '/property/class-d-in-out',
        element: PropertyClassDInOut,
    },
    {
        title: 'Property Worksheet D Sentence Length',
        path: '/property/class-d-sentence-length',
        element: PropertyClassDSentenceLength, 
    },
    {
        title: 'Personal Worksheet In/Out',  
        path: '/personal/in-out',
        element: PersonalInOut,
    },
    {
        title: 'Personal Worksheet Sentence Length',
        path: '/personal/sentence-length',
        element: PersonalSentenceLength,
    },
];

export default routes;