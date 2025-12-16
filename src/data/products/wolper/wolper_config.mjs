import fs from 'fs';
// node src\data\products\wolper\wolper_config.mjs

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

        const sku = `WW-03-${typeCode}-${gradeCode}-${thickCode}-${execCode}${insPart}-${safeSkuDiam}`;

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

addVariants('single', 'ais304', 't05', 'nerzh', null, diams_Single_304_05);



const finalObject = {
    baseCode: "WW-03",
    name: "Wywietrznik Wołper",
    description: "Cylindryczna nasada kominowa wykorzystująca energię wiatru do wspomagania ciągu. Chroni przewód przed opadami i stabilizuje wentylację.",
    baseImage: "/assets/wolper.png",
    benefits: [
        {
            title: "Skuteczna wentylacja",
            text: "Konstrukcja z pionowymi lamelami tworzy podciśnienie przy każdym powiewie wiatru, skutecznie wysysając zużyte powietrze lub spaliny z komina."
        },
        {
            title: "Kompaktowa budowa",
            text: "Brak elementów ruchomych sprawia, że jest bezawaryjny, cichy i odporny na trudne warunki atmosferyczne, idealny do wentylacji grawitacyjnej."
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
fs.writeFileSync('wolper.json', jsonString, 'utf-8');