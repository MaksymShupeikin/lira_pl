import fs from 'fs';
// node src\data\products\kogut\kogut_config.mjs

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

        const sku = `NK-02-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

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
    100, 110, 120, 130, 140, 150, 160, 180, 200,
    220, 230, 250, 300, 350, 400, 450, 500
];

addVariants('single', 'ais304', 't05', 'nerzh', null, diams_Single_304_05);



const finalObject = {
    baseCode: "NK-02",
    name: "Nasada Obrotowa \"Kogut\"",
    description: "Samonastawna nasada kominowa, która ustawia się zawsze w kierunku wiejącego wiatru. Wykorzystuje jego siłę do wspomagania ciągu i ochrony przewodu kominowego.",
    baseImage: "/assets/kogut.png",
    benefits: [
        {
            title: "Maksymalna wydajność",
            text: "Dzięki łożyskowanej konstrukcji nasada obraca się płynnie, ustawiając się tyłem do wiatru i wytwarzając podciśnienie, które skutecznie wysysa spaliny."
        },
        {
            title: "Ochrona przed cofką",
            text: "Specjalna budowa całkowicie zasłania wylot komina przed wiatrem opadającym, eliminując ryzyko ciągu wstecznego i zadymienia pomieszczeń."
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
        steelThickness: 't05',
        execution: 'nerzh',
        insulation: null,
        diameter: 'd150'
    },

    variants: variants
};

const jsonString = JSON.stringify(finalObject, null, 2);
fs.writeFileSync('kogut.json', jsonString, 'utf-8');