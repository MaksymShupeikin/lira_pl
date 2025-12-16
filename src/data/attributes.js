
export const chimneyTypes = [
    { id: 'single', name: 'Jednościenny' },
    { id: 'thermo', name: 'Dwuścienny' },
];


export const steelGrades = [
    { id: 'ais201', name: 'AISI 201', text: 'Ekonomiczna' },
    { id: 'ais304', name: 'AISI 304', text: 'Standard' },
    { id: 'ais321', name: 'AISI 321', text: 'Przemysłowa' },
];

export const steelThicknesses = [
    { id: 't05', name: '0.5 mm' },
    { id: 't08', name: '0.8 mm' },
    { id: 't10', name: '1.0 mm' },
];

export const executionVariants = [
    { id: 'nerzh', name: 'Nierdzewna', text: 'Stal kwasoodporna' },
    { id: 'oc', name: 'Ocynk', text: 'Stal ocynkowana' },
    { id: 'nerzh_oc', name: 'Nierdz/Ocynk', text: 'Wewn. kwasoodporna / Zewn. ocynk' },
    { id: 'nerzh_nerzh', name: 'Nierdz/Nierdz', text: 'Wewn. kwasoodporna / Zewn. nierdzewna' },
];

export const insulationThicknesses = [
    { id: 'iso30', name: '30 mm', text: 'Wełna mineralna' },
    { id: 'iso50', name: '50 mm', text: 'Izolacja przemysłowa' },
];



const rawSingle = [
    '100', '110', '120', '125', '130', '140', '150', '160', '180', '200', '220', '230', '250', '260', '280', '300', '320', '330', '350', '360', '380', '400', '420', '450', '460', '500', '520', '860'
];

const rawThermo = [
    '100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560',
    '100/200', '120/220', '130/230', '140/240', '150/250', '160/260', '180/280', '200/300'
];

const formatDiameter = (d) => ({
    id: `d${d.replace('/', '_')}`,
    name: `${d} mm`
});

export const diametersSingle = rawSingle.map(formatDiameter);
export const diametersThermo = rawThermo.map(formatDiameter);


export const allAttributesDefinitions = {
    chimneyType: chimneyTypes,
    steelGrade: steelGrades,
    steelThickness: steelThicknesses,
    execution: executionVariants,
    insulation: insulationThicknesses,
};