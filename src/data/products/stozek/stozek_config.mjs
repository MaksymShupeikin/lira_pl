import fs from 'fs';
// node src\data\products\stozek\stozek_config.mjs

const variants = [];

const addVariants = (type, grade, thick, exec, ins, diameters) => {
    diameters.forEach(d => {
        const dStr = String(d);
        const safeId = `d${dStr.replace('/', '_')}`;
        const safeSkuDiam = dStr.replace('/', '-');

        const typeCode = type === 'single' ? 'S' : 'T';
        const gradeCode = grade.slice(3);
        const thickCode = thick.slice(1);

        let execCode = 'N';
        if (exec === 'nerzh_oc') execCode = 'NO';
        if (exec === 'nerzh_nerzh') execCode = 'NN';

        const insPart = ins ? `-${ins.slice(3)}` : '';

        const sku = `US-06-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

        variants.push({
            sku: sku,
            attributes: {
                chimneyType: type,
                steelGrade: grade,
                steelThickness: thick,
                execution: exec,
                insulation: ins,
                diameter: safeId,
            }
        });
    });
};



// Thermo/AiSi304
const diams_Thermo_304_05_iso30 = [
    '100/160', '110/180', '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560', '100/200', '120/220', '130/230',
];
const diams_Thermo_304_05_iso50 = [
    '140/240', '150/250',
    '160/260', '180/280', '200/300'
];

addVariants('thermo', 'ais304', 't05', 'nerzh_oc', 'iso30', diams_Thermo_304_05_iso30);
addVariants('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso30', diams_Thermo_304_05_iso30);

addVariants('thermo', 'ais304', 't05', 'nerzh_oc', 'iso50', diams_Thermo_304_05_iso50);
addVariants('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso50', diams_Thermo_304_05_iso50);

const diams_Thermo_304_08_iso30 = [
    '100/160', '110/180', '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560', '100/200', '120/220', '130/230',
];
const diams_Thermo_304_08_iso50 = [
    '140/240', '150/250',
    '160/260', '180/280', '200/300'
];

addVariants('thermo', 'ais304', 't08', 'nerzh_oc', 'iso30', diams_Thermo_304_08_iso30);
addVariants('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso30', diams_Thermo_304_08_iso30);

addVariants('thermo', 'ais304', 't08', 'nerzh_oc', 'iso50', diams_Thermo_304_08_iso50);
addVariants('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso50', diams_Thermo_304_08_iso50);

const diams_Thermo_304_10_iso30 = [
    '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560', '120/220', '130/230', '140/240',
    '150/250', '160/260', '180/280', '200/300'
    
];
const diams_Thermo_304_10_iso50 = [
    '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560', '120/220', '130/230', '140/240',
    '150/250', '160/260', '180/280', '200/300'
];

addVariants('thermo', 'ais304', 't10', 'nerzh_oc', 'iso30', diams_Thermo_304_10_iso30);
addVariants('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso30', diams_Thermo_304_10_iso30);

addVariants('thermo', 'ais304', 't10', 'nerzh_oc', 'iso50', diams_Thermo_304_10_iso50);
addVariants('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso50', diams_Thermo_304_10_iso50);


// Thermo/AiSi321
const diams_Thermo_321_08_iso30 = [
    '100/160', '110/180', '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560', '100/200', '120/220', '130/230',
];
const diams_Thermo_321_08_iso50 = [
    '140/240', '150/250', '160/260', '180/280', '200/300',
];

addVariants('thermo', 'ais321', 't08', 'nerzh_oc', 'iso30', diams_Thermo_321_08_iso30);
addVariants('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso30', diams_Thermo_321_08_iso30);

addVariants('thermo', 'ais321', 't08', 'nerzh_oc', 'iso50', diams_Thermo_321_08_iso50);
addVariants('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso50', diams_Thermo_321_08_iso50);

const diams_Thermo_321_10_iso30 = [
    '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420',
];
const diams_Thermo_321_10_iso50 = [
     '140/240', '150/250', '160/260', '180/280', '200/300',
];

addVariants('thermo', 'ais321', 't10', 'nerzh_oc', 'iso30', diams_Thermo_321_10_iso30);
addVariants('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso30', diams_Thermo_321_10_iso50);

addVariants('thermo', 'ais321', 't10', 'nerzh_oc', 'iso50', diams_Thermo_321_10_iso30);
addVariants('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso50', diams_Thermo_321_10_iso30);



const finalObject = {
    baseCode: "US-06",
    name: "Ustnik / Stożek",
    description: "Element zamykający górną część komina dwuściennego (izolowanego). Osłania warstwę izolacji przed opadami atmosferycznymi.",
    baseImage: "/assets/stozek.png",
    benefits: [
        {
            title: "Ochrona izolacji",
            text: "Szczelnie zamyka przestrzeń między rurą wewnętrzną a płaszczem zewnętrznym, zapobiegając zamoknięciu wełny mineralnej."
        },
        {
            title: "Estetyczne wykończenie",
            text: "Stanowi eleganckie i profesjonalne zwieńczenie systemu kominowego, zapewniając jego trwałość i szczelność."
        }
    ],

    applicableAttributes: [
        'chimneyType',
        'steelGrade', 
        'steelThickness',
        'execution', 
        'insulation',
        'diameter'
    ],

    defaultSelections: {
        chimneyType: 'thermo',
        steelGrade: 'ais304',
        steelThickness: 't08',
        execution: 'nerzh_nerzh',
        insulation: 'iso30',
        diameter: 'd150_220',
    },

    variants: variants
};

const jsonString = JSON.stringify(finalObject, null, 2);
fs.writeFileSync('stozek.json', jsonString, 'utf-8');