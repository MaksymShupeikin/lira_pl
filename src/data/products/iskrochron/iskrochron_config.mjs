import fs from 'fs';
// node src\data\products\iskrochron\iskrochron_config.mjs

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

        const sku = `IS-05-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

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



//Single AiSi 304

const diams_Single_304_08 = [
    120, 130, 150, 160, 180, 200,
    220, 230, 250,
];

const diams_Single_304_1 = [
    120, 130, 150, 160, 180, 200,
    220, 230, 250,
];

addVariants('single', 'ais304', 't08', 'nerzh', null, diams_Single_304_08);
addVariants('single', 'ais304', 't10', 'nerzh', null, diams_Single_304_1);


//Single AiSi 321
const diams_Single_321_08 = [
    120, 130, 150, 160, 180, 200,
    220, 230, 250,
];

addVariants('single', 'ais321', 't08', 'nerzh', null, diams_Single_321_08);



const finalObject = {
    baseCode: "IS-05",
    name: "Iskrochron Siatkowy",
    description: "Specjalistyczne zakończenie komina wyposażone w siatkę, która zatrzymuje rozżarzone cząstki. Niezbędny przy dachach wykonanych z materiałów łatwopalnych.",
    baseImage: "/assets/iskrochron.png",
    benefits: [
        {
            title: "Bezpieczeństwo pożarowe",
            text: "Skutecznie rozbija i wygasza iskry wydobywające się z przewodu kominowego, chroniąc dach i otoczenie przed zapłonem."
        },
        {
            title: "Wymóg prawny",
            text: "Stosowanie iskrochronu jest obowiązkowe w przypadku budynków z pokryciem dachowym palnym (np. strzecha, gont drewniany)."
        }
    ],

    applicableAttributes: [
        'steelGrade', 
        'steelThickness',
        'execution', 
        'diameter'
    ],

    defaultSelections: {
        chimneyType: 'single',
        steelGrade: 'ais304',
        steelThickness: 't08',
        execution: 'nerzh',
        insulation: null,
        diameter: 'd150'
    },

    variants: variants
};

const jsonString = JSON.stringify(finalObject, null, 2);
fs.writeFileSync('iskrochron.json', jsonString, 'utf-8');