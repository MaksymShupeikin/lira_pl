import fs from 'fs';
// node src\data\products\plate\plate_config.mjs


// 1. AiSi 304 (0.5mm)
const diams_304_05 = [
    '100/160', '110/180', '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560'
];

// 2. AiSi 304 (0.8mm)
const diams_304_08 = [
    '100/160', '110/180', '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560'
];

// 3. AiSi 304 (1.0mm)
const diams_304_10 = [
    '100/160', '110/180', '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560'
];

// 4. AiSi 321 (0.8mm)
const diams_321_08 = [
    '100/160', '110/180', '120/180', '130/200', '140/200',
    '150/220', '160/220', '180/250', '200/260', '220/280',
    '230/300', '250/320', '300/360', '350/420', '400/460',
    '450/520', '500/560'
];

// 5. AiSi 321 (1.0mm)
const diams_321_10 = [
    '120/180', '130/200', '140/200', '150/220', '160/220',
    '180/250', '200/260', '220/280', '230/300', '250/320',
    '300/360', '350/420', '400/460', '450/520', '500/560'
];


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

        const sku = `PP-14-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

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


// 1. AiSi 304 / 0.5mm
addVariants('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso30', diams_304_05);

// 2. AiSi 304 / 0.8mm
addVariants('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso30', diams_304_08);

// 3. AiSi 304 / 1.0mm
addVariants('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso30', diams_304_10);


// 4. AiSi 321 / 0.8mm
addVariants('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso30', diams_321_08);

// 5. AiSi 321 / 1.0mm
addVariants('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso30', diams_321_10);


const finalObject = {
    baseCode: "US-06",
    name: "Ustnik / Stożek (Конус)",
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
fs.writeFileSync('plate.json', jsonString, 'utf-8');
console.log(`Generated stozek.json with ${variants.length} variants.`);