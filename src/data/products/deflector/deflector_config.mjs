import fs from 'fs';
// node src\data\products\deflector\deflector_config.mjs

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

        const sku = `DF-01-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

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
const diams_Single_304_05 = [
    100, 110, 120, 125, 130, 140, 150, 160, 180, 200,
    220, 230, 250, 300, 350, 400, 450, 500
];

const diams_Single_304_08 = [
    100, 110, 120, 125, 130, 140, 150, 160, 180, 200,
    220, 230, 250, 300, 350, 400, 450, 500
];

const diams_Single_304_1 = [
    120, 125, 130, 140, 150, 160, 180, 200,
    220, 230, 250, 300, 350, 400, 450, 500
];

addVariants('single', 'ais304', 't05', 'nerzh', null, diams_Single_304_05);
addVariants('single', 'ais304', 't08', 'nerzh', null, diams_Single_304_08);
addVariants('single', 'ais304', 't10', 'nerzh', null, diams_Single_304_1);


//Single AiSi 321
const diams_Single_321_08 = [
    120, 125, 130, 140, 150, 160, 180, 200,
    220, 230, 250, 300, 350, 400, 450, 500
];

const diams_Single_321_1 = [
    120, 125, 130, 140, 150, 160, 180, 200,
    220, 230, 250, 300, 350, 400, 450, 500
];

addVariants('single', 'ais321', 't08', 'nerzh', null, diams_Single_321_08);
addVariants('single', 'ais321', 't10', 'nerzh', null, diams_Single_321_1);



const finalObject = {
    baseCode: "DF-01",
    baseImage: "/assets/deflektor.png",
    applicableAttributes: [
        'steelGrade', 'steelThickness',
        'execution', 'diameter'
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
fs.writeFileSync('deflector.json', jsonString, 'utf-8');