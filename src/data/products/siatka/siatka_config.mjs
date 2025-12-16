import fs from 'fs';
// node src\data\products\siatka\siatka_config.mjs

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

        const sku = `SO-08-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

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
    100, 110, 120, 130, 140, 150
];

const diams_Single_304_08 = [
    100, 110, 120, 130, 140, 150
];

const diams_Single_304_10 = [
    120, 130, 140, 150
];

addVariants('single', 'ais304', 't05', 'nerzh', null, diams_Single_304_05);
addVariants('single', 'ais304', 't08', 'nerzh', null, diams_Single_304_08);
addVariants('single', 'ais304', 't10', 'nerzh', null, diams_Single_304_10);


//Single AiSi 321
const diams_Single_321_08 = [
    100, 110, 120, 130, 140, 150
];

const diams_Single_321_10 = [
    120, 130, 140, 150
];

addVariants('single', 'ais321', 't08', 'nerzh', null, diams_Single_321_08);
addVariants('single', 'ais321', 't10', 'nerzh', null, diams_Single_321_10);


const finalObject = {
    baseCode: "SO-08",
    name: "Siatka Ochronna",
    description: "Element zabezpieczający wylot komina przed ptactwem, liśćmi oraz innymi zanieczyszczeniami. Gwarantuje drożność przewodu kominowego.",
    baseImage: "/assets/siatka.png",
    benefits: [
        {
            title: "Ochrona przed ptakami",
            text: "Skuteczna bariera fizyczna uniemożliwia ptakom zakładanie gniazd wewnątrz komina, zapobiegając niebezpiecznym zatorom i zatruciom czadem."
        },
        {
            title: "Swobodny przepływ",
            text: "Odpowiednio dobrana wielkość oczek zapewnia swobodny wyrzut spalin i wentylację, jednocześnie zatrzymując większe zanieczyszczenia."
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
fs.writeFileSync('siatka.json', jsonString, 'utf-8');