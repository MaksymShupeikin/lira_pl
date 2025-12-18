import fs from 'fs';
// node src/data/products/pipes/pipes_config.mjs 


const single_201_05 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_201_08 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_201_10 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

const single_304_05 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_304_08 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_304_10 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

const single_321_08 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_321_10 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

const thermo_201_05 = ['100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560'];
const thermo_201_08 = ['120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560'];

const thermo_304_05_iso30 = ['100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560', '100/200', '120/220', '130/230'];
const thermo_304_05_iso50 = ['100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560', '100/200', '120/220', '130/230', '140/240', '150/250', '160/260', '180/280', '200/300'];

const thermo_304_08_iso30 = thermo_304_05_iso30;
const thermo_304_08_iso50 = thermo_304_05_iso50;

const thermo_304_10_iso30 = ['100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560', '120/220', '130/230'];
const thermo_304_10_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];

const thermo_321_08_iso30 = ['100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560', '100/200', '120/220', '130/230'];
const thermo_321_08_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];

const thermo_321_10_iso30 = ['100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560', '120/220', '130/230'];
const thermo_321_10_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];

const generateVariants = (baseSkuPrefix) => {
    const variants = [];

    const add = (type, grade, thick, exec, ins, diameters) => {
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

            const sku = `${baseSkuPrefix}-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

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

    add('single', 'ais201', 't05', 'nerzh', null, single_201_05);
    add('single', 'ais201', 't08', 'nerzh', null, single_201_08);
    add('single', 'ais201', 't10', 'nerzh', null, single_201_10);

    add('single', 'ais304', 't05', 'nerzh', null, single_304_05);
    add('single', 'ais304', 't08', 'nerzh', null, single_304_08);
    add('single', 'ais304', 't10', 'nerzh', null, single_304_10);

    add('single', 'ais321', 't08', 'nerzh', null, single_321_08);
    add('single', 'ais321', 't10', 'nerzh', null, single_321_10);


    add('thermo', 'ais201', 't05', 'nerzh_oc', 'iso30', thermo_201_05);
    add('thermo', 'ais201', 't05', 'nerzh_nerzh', 'iso30', thermo_201_05);
    add('thermo', 'ais201', 't08', 'nerzh_oc', 'iso30', thermo_201_08);
    add('thermo', 'ais201', 't08', 'nerzh_nerzh', 'iso30', thermo_201_08);
    add('thermo', 'ais201', 't10', 'nerzh_oc', 'iso30', thermo_201_08);
    add('thermo', 'ais201', 't10', 'nerzh_nerzh', 'iso30', thermo_201_08);

    add('thermo', 'ais304', 't05', 'nerzh_oc', 'iso30', thermo_304_05_iso30);
    add('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso30', thermo_304_05_iso30);
    add('thermo', 'ais304', 't05', 'nerzh_oc', 'iso50', thermo_304_05_iso50);
    add('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso50', thermo_304_05_iso50);

    add('thermo', 'ais304', 't08', 'nerzh_oc', 'iso30', thermo_304_08_iso30);
    add('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso30', thermo_304_08_iso30);
    add('thermo', 'ais304', 't08', 'nerzh_oc', 'iso50', thermo_304_08_iso50);
    add('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso50', thermo_304_08_iso50);

    add('thermo', 'ais304', 't10', 'nerzh_oc', 'iso30', thermo_304_10_iso30);
    add('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso30', thermo_304_10_iso30);
    add('thermo', 'ais304', 't10', 'nerzh_oc', 'iso50', thermo_304_10_iso50);
    add('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso50', thermo_304_10_iso50);

    add('thermo', 'ais321', 't08', 'nerzh_oc', 'iso30', thermo_321_08_iso30);
    add('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso30', thermo_321_08_iso30);
    add('thermo', 'ais321', 't08', 'nerzh_oc', 'iso50', thermo_321_08_iso50);
    add('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso50', thermo_321_08_iso50);

    add('thermo', 'ais321', 't10', 'nerzh_oc', 'iso30', thermo_321_10_iso30);
    add('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso30', thermo_321_10_iso30);
    add('thermo', 'ais321', 't10', 'nerzh_oc', 'iso50', thermo_321_10_iso50);
    add('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso50', thermo_321_10_iso50);

    return variants;
};


const products = [
    {
        filename: 'pipe1m.json',
        baseCode: 'RP-100',
        image: "/assets/rura.png"
    },
    {
        filename: 'pipe05m.json',
        baseCode: 'RP-050',
        image: "/assets/rura5.png"
    },
    {
        filename: 'pipe03m.json',
        baseCode: 'RP-030',
        image: "/assets/rura3.png"
    },
    {
        filename: 'pipe025m.json',
        baseCode: 'RP-025',
        image: "/assets/rura25.png"
    }
];


products.forEach(prod => {
    const variants = generateVariants(prod.baseCode);

    const finalObject = {
        baseCode: prod.baseCode,
        baseImage: prod.image,
        applicableAttributes: [
            'chimneyType', 'steelGrade', 'steelThickness',
            'execution', 'insulation', 'diameter'
        ],
        defaultSelections: {
            chimneyType: 'single',
            steelGrade: 'ais201',
            steelThickness: 't05',
            execution: 'nerzh',
            insulation: null,
            diameter: 'd150'
        },
        variants: variants
    };

    fs.writeFileSync(prod.filename, JSON.stringify(finalObject, null, 2), 'utf-8');
    console.log(`Generated ${prod.filename} with ${variants.length} variants.`);
});