import fs from 'fs';
// node src/data/products/tees/tees_config.mjs


const single_201_t05_45 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_201_t08_45 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_201_t10_45 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

const single_304_t05_45 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_304_t08_45 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_304_t10_45 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

const single_321_t08_45 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];
const single_321_t10_45 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

const thermo_201_t05_45_iso30 = ['100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560'];
const thermo_201_t08_45_iso30 = ['120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520'];
const thermo_201_t10_45_iso30 = ['120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520'];

const thermo_304_t05_45_iso30 = ['100/160', '100/200', '110/180', '120/180', '120/220', '130/200', '130/230', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560'];
const thermo_304_t08_45_iso30 = thermo_304_t05_45_iso30;
const thermo_304_t10_45_iso30 = ['120/180', '120/220', '130/200', '130/230', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '450/520', '500/560'];

const thermo_304_t05_45_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];
const thermo_304_t08_45_iso50 = thermo_304_t05_45_iso50;
const thermo_304_t10_45_iso50 = thermo_304_t05_45_iso50;

const thermo_321_t08_45_iso30 = thermo_304_t05_45_iso30;
const thermo_321_t10_45_iso30 = thermo_304_t10_45_iso30;
const thermo_321_t08_45_iso50 = thermo_304_t05_45_iso50;
const thermo_321_t10_45_iso50 = thermo_304_t05_45_iso50;


const single_201_t05_90 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 500];
const single_201_t08_90 = [120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 500];
const single_201_t10_90 = single_201_t08_90;

const single_304_t05_90 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 500];
const single_304_t08_90 = single_304_t05_90;
const single_304_t10_90 = single_201_t08_90;

const single_321_t08_90 = single_304_t05_90;
const single_321_t10_90 = single_201_t08_90;

const thermo_201_t05_90_iso30 = ['100/160', '110/180', '120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '500/560'];
const thermo_201_t08_90_iso30 = ['120/180', '130/200', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '500/560'];
const thermo_201_t10_90_iso30 = thermo_201_t08_90_iso30;

const thermo_304_t05_90_iso30 = ['100/160', '100/200', '110/180', '120/180', '120/220', '130/200', '130/230', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '500/560'];
const thermo_304_t08_90_iso30 = thermo_304_t05_90_iso30;
const thermo_304_t10_90_iso30 = ['120/180', '120/220', '130/200', '130/230', '140/200', '150/220', '160/220', '180/250', '200/260', '220/280', '230/300', '250/320', '300/360', '350/420', '400/460', '500/560'];

const thermo_304_t05_90_iso50 = ['140/240', '150/250', '160/260', '180/280', '200/300'];
const thermo_304_t08_90_iso50 = thermo_304_t05_90_iso50;
const thermo_304_t10_90_iso50 = thermo_304_t05_90_iso50;

const thermo_321_t08_90_iso30 = thermo_304_t05_90_iso30;
const thermo_321_t10_90_iso30 = thermo_304_t10_90_iso30;
const thermo_321_t08_90_iso50 = thermo_304_t05_90_iso50;
const thermo_321_t10_90_iso50 = thermo_304_t05_90_iso50;


const generateVariants = (angle) => {
    const variants = [];
    const baseCode = angle === '45' ? 'TR-45' : 'TR-90';

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

    if (angle === '45') {
        add('single', 'ais201', 't05', 'nerzh', null, single_201_t05_45);
        add('single', 'ais201', 't08', 'nerzh', null, single_201_t08_45);
        add('single', 'ais201', 't10', 'nerzh', null, single_201_t10_45);
        add('single', 'ais304', 't05', 'nerzh', null, single_304_t05_45);
        add('single', 'ais304', 't08', 'nerzh', null, single_304_t08_45);
        add('single', 'ais304', 't10', 'nerzh', null, single_304_t10_45);
        add('single', 'ais321', 't08', 'nerzh', null, single_321_t08_45);
        add('single', 'ais321', 't10', 'nerzh', null, single_321_t10_45);

        add('thermo', 'ais201', 't05', 'nerzh_nerzh', 'iso30', thermo_201_t05_45_iso30);
        add('thermo', 'ais201', 't05', 'nerzh_oc', 'iso30', thermo_201_t05_45_iso30);
        add('thermo', 'ais201', 't08', 'nerzh_nerzh', 'iso30', thermo_201_t08_45_iso30);
        add('thermo', 'ais201', 't08', 'nerzh_oc', 'iso30', thermo_201_t08_45_iso30);
        add('thermo', 'ais201', 't10', 'nerzh_nerzh', 'iso30', thermo_201_t10_45_iso30);
        add('thermo', 'ais201', 't10', 'nerzh_oc', 'iso30', thermo_201_t10_45_iso30);

        add('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso30', thermo_304_t05_45_iso30);
        add('thermo', 'ais304', 't05', 'nerzh_oc', 'iso30', thermo_304_t05_45_iso30);
        add('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso50', thermo_304_t05_45_iso50);
        add('thermo', 'ais304', 't05', 'nerzh_oc', 'iso50', thermo_304_t05_45_iso50);
        add('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso30', thermo_304_t08_45_iso30);
        add('thermo', 'ais304', 't08', 'nerzh_oc', 'iso30', thermo_304_t08_45_iso30);
        add('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso50', thermo_304_t08_45_iso50);
        add('thermo', 'ais304', 't08', 'nerzh_oc', 'iso50', thermo_304_t08_45_iso50);
        add('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso30', thermo_304_t10_45_iso30);
        add('thermo', 'ais304', 't10', 'nerzh_oc', 'iso30', thermo_304_t10_45_iso30);
        add('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso50', thermo_304_t10_45_iso50);
        add('thermo', 'ais304', 't10', 'nerzh_oc', 'iso50', thermo_304_t10_45_iso50);

        add('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso30', thermo_321_t08_45_iso30);
        add('thermo', 'ais321', 't08', 'nerzh_oc', 'iso30', thermo_321_t08_45_iso30);
        add('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso50', thermo_321_t08_45_iso50);
        add('thermo', 'ais321', 't08', 'nerzh_oc', 'iso50', thermo_321_t08_45_iso50);
        add('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso30', thermo_321_t10_45_iso30);
        add('thermo', 'ais321', 't10', 'nerzh_oc', 'iso30', thermo_321_t10_45_iso30);
        add('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso50', thermo_321_t10_45_iso50);
        add('thermo', 'ais321', 't10', 'nerzh_oc', 'iso50', thermo_321_t10_45_iso50);

    } else {
        add('single', 'ais201', 't05', 'nerzh', null, single_201_t05_90);
        add('single', 'ais201', 't08', 'nerzh', null, single_201_t08_90);
        add('single', 'ais201', 't10', 'nerzh', null, single_201_t10_90);
        add('single', 'ais304', 't05', 'nerzh', null, single_304_t05_90);
        add('single', 'ais304', 't08', 'nerzh', null, single_304_t08_90);
        add('single', 'ais304', 't10', 'nerzh', null, single_304_t10_90);
        add('single', 'ais321', 't08', 'nerzh', null, single_321_t08_90);
        add('single', 'ais321', 't10', 'nerzh', null, single_321_t10_90);

        add('thermo', 'ais201', 't05', 'nerzh_nerzh', 'iso30', thermo_201_t05_90_iso30);
        add('thermo', 'ais201', 't05', 'nerzh_oc', 'iso30', thermo_201_t05_90_iso30);
        add('thermo', 'ais201', 't08', 'nerzh_nerzh', 'iso30', thermo_201_t08_90_iso30);
        add('thermo', 'ais201', 't08', 'nerzh_oc', 'iso30', thermo_201_t08_90_iso30);
        add('thermo', 'ais201', 't10', 'nerzh_nerzh', 'iso30', thermo_201_t10_90_iso30);
        add('thermo', 'ais201', 't10', 'nerzh_oc', 'iso30', thermo_201_t10_90_iso30);

        add('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso30', thermo_304_t05_90_iso30);
        add('thermo', 'ais304', 't05', 'nerzh_oc', 'iso30', thermo_304_t05_90_iso30);
        add('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso50', thermo_304_t05_90_iso50);
        add('thermo', 'ais304', 't05', 'nerzh_oc', 'iso50', thermo_304_t05_90_iso50);
        add('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso30', thermo_304_t08_90_iso30);
        add('thermo', 'ais304', 't08', 'nerzh_oc', 'iso30', thermo_304_t08_90_iso30);
        add('thermo', 'ais304', 't08', 'nerzh_nerzh', 'iso50', thermo_304_t08_90_iso50);
        add('thermo', 'ais304', 't08', 'nerzh_oc', 'iso50', thermo_304_t08_90_iso50);
        add('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso30', thermo_304_t10_90_iso30);
        add('thermo', 'ais304', 't10', 'nerzh_oc', 'iso30', thermo_304_t10_90_iso30);
        add('thermo', 'ais304', 't10', 'nerzh_nerzh', 'iso50', thermo_304_t10_90_iso50);
        add('thermo', 'ais304', 't10', 'nerzh_oc', 'iso50', thermo_304_t10_90_iso50);

        add('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso30', thermo_321_t08_90_iso30);
        add('thermo', 'ais321', 't08', 'nerzh_oc', 'iso30', thermo_321_t08_90_iso30);
        add('thermo', 'ais321', 't08', 'nerzh_nerzh', 'iso50', thermo_321_t08_90_iso50);
        add('thermo', 'ais321', 't08', 'nerzh_oc', 'iso50', thermo_321_t08_90_iso50);
        add('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso30', thermo_321_t10_90_iso30);
        add('thermo', 'ais321', 't10', 'nerzh_oc', 'iso30', thermo_321_t10_90_iso30);
        add('thermo', 'ais321', 't10', 'nerzh_nerzh', 'iso50', thermo_321_t10_90_iso50);
        add('thermo', 'ais321', 't10', 'nerzh_oc', 'iso50', thermo_321_t10_90_iso50);
    }

    return variants;
};


const products = [
    {
        filename: 'tee45.json',
        angle: '45',
        baseCode: 'TR-45',
        name: "Trójnik 45° (Трійник 45°)",
        description: "Використовується для з'єднання димоходу з опалювальним приладом під кутом 45 градусів. Забезпечує кращу тягу.",
        image: "/assets/trojnik.png"
    },
    {
        filename: 'tee90.json',
        angle: '90',
        baseCode: 'TR-87',
        name: "Trójnik 87°",
        description: "Класичний трійник для підключення димоходу під прямим кутом. Має ревізійний отвір.",
        image: "/assets/trojnik87.png"
    }
];

products.forEach(prod => {
    const variants = generateVariants(prod.angle);
    
    const finalObject = {
        baseCode: prod.baseCode,
        name: prod.name,
        description: prod.description,
        baseImage: prod.image,
        benefits: [
            {
                title: "Універсальність підключення",
                text: "Дозволяє легко підключити котел або камін до основного димоходу."
            },
            {
                title: "Зварювання TIG",
                text: "Всі шви зварені методом TIG в середовищі аргону, що гарантує міцність та герметичність."
            },
            {
                title: "Ідеальна геометрія",
                text: "Лазерний розкрій металу забезпечує точні розміри та легку збірку."
            }
        ],
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