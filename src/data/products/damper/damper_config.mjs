import fs from 'fs';
// node src\data\products\damper\damper_config.mjs


// Single Wall - AiSi 304
const single_304_t05 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_304_t08 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_304_t10 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

// Single Wall - AiSi 321
const single_321_t08 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_321_t10 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

// Thermo - AiSi 304 (0.5mm)
const thermo_304_t05_iso30 = ['100/160', '100/200', '110/180', '120/180', '120/220', '130/200', '130/230', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420'];
const thermo_304_t05_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];

// Thermo - AiSi 304 (0.8mm)
const thermo_304_t08_iso30 = ['100/160', '100/200', '110/180', '120/180', '120/220', '130/200', '130/230', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360'];
const thermo_304_t08_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];

// Thermo - AiSi 304 (1.0mm)
const thermo_304_t10_iso30 = ['120/180', '120/220', '130/200', '130/230', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360'];
const thermo_304_t10_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];

// Thermo - AiSi 321 (0.8mm)
const thermo_321_t08_iso30 = ['100/160', '100/200', '110/180', '120/180', '120/220', '130/200', '130/230', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360'];
const thermo_321_t08_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];

// Thermo - AiSi 321 (1.0mm)
const thermo_321_t10_iso30 = ['120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420']; // Added 350/420 from list
const thermo_321_t10_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];


// --- GENERATOR FUNCTION ---

const generateVariants = () => {
    const variants = [];
    const baseCode = 'SZ-21';

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

            const sku = `${baseCode}-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

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

    add('single', 'ais304', 't05', 'nerzh', null, single_304_t05);
    add('single', 'ais304', 't08', 'nerzh', null, single_304_t08);
    add('single', 'ais304', 't10', 'nerzh', null, single_304_t10);

    add('single', 'ais321', 't08', 'nerzh', null, single_321_t08);
    add('single', 'ais321', 't10', 'nerzh', null, single_321_t10);

    ['nerzh_nerzh', 'nerzh_oc'].forEach(exec => {
        add('thermo', 'ais304', 't05', exec, 'iso30', thermo_304_t05_iso30);
        add('thermo', 'ais304', 't05', exec, 'iso50', thermo_304_t05_iso50);
        add('thermo', 'ais304', 't08', exec, 'iso30', thermo_304_t08_iso30);
        add('thermo', 'ais304', 't08', exec, 'iso50', thermo_304_t08_iso50);
        add('thermo', 'ais304', 't10', exec, 'iso30', thermo_304_t10_iso30);
        add('thermo', 'ais304', 't10', exec, 'iso50', thermo_304_t10_iso50);
    });

    ['nerzh_nerzh', 'nerzh_oc'].forEach(exec => {
        add('thermo', 'ais321', 't08', exec, 'iso30', thermo_321_t08_iso30);
        add('thermo', 'ais321', 't08', exec, 'iso50', thermo_321_t08_iso50);
        add('thermo', 'ais321', 't10', exec, 'iso30', thermo_321_t10_iso30);
        add('thermo', 'ais321', 't10', exec, 'iso50', thermo_321_t10_iso50);
    });

    return variants;
};


const product = {
    filename: 'damper.json',
    baseCode: 'SZ-21',
    image: "/assets/szyber.png"
};


const variants = generateVariants();

const finalObject = {
    baseCode: product.baseCode,
    baseImage: product.image,

    applicableAttributes: [
        'chimneyType', 'steelGrade', 'steelThickness',
        'execution', 'insulation', 'diameter'
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

fs.writeFileSync(product.filename, JSON.stringify(finalObject, null, 2), 'utf-8');
console.log(`Generated ${product.filename} with ${variants.length} variants.`);