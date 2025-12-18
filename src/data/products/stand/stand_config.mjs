import fs from 'fs';


const diams_304_t05 = [
    '100/160', '110/180', '120/180', '130/200', '140/200', 
    '150/220', '160/220', '180/250', '200/260', '220/280', 
    '230/300', '250/320', '300/360', '350/420', '400/460', 
    '450/520', '500/560', 
    '100/200', '120/220', '130/230', '140/240', '150/250', 
    '160/260', '180/280', '200/300'
];


const generateVariants = () => {
    const variants = [];
    const baseCode = 'PW-19';

    const add = (type, grade, thick, exec, ins, diameters) => {
        diameters.forEach(d => {
            const dStr = String(d);
            const safeId = `d${dStr.replace('/', '_')}`;
            const safeSkuDiam = dStr.replace('/', '-');

            const typeCode = 'T';
            const gradeCode = grade.slice(3);
            const thickCode = thick.slice(1);

            let execCode = 'NN';

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

    add('thermo', 'ais304', 't05', 'nerzh_nerzh', 'iso30', diams_304_t05);

    return variants;
};

const product = {
    filename: 'stand.json',
    baseCode: 'PO-16',
    name: "Podstawa / Podpora",
    description: "Element startowy komina (na fundamencie). Umożliwia montaż trójnika wyczystkowego i odprowadzenie kondensatu (przy zastosowaniu lejka).",
    image: "/assets/plyta_wspornikowa.png"
};


const variants = generateVariants();

const finalObject = {
    baseCode: product.baseCode,
    name: product.name,
    description: product.description,
    baseImage: product.image,
    benefits: [
        {
            title: "Stabilny start",
            text: "Stanowi solidną podstawę dla całego pionu kominowego montowanego od podłogi."
        },
        {
            title: "Odporność kwasowa",
            text: "Wykonana w całości ze stali kwasoodpornej 304, co gwarantuje długowieczność."
        },
        {
            title: "Izolacja",
            text: "Wersja izolowana zapobiega wychładzaniu spalin w dolnej części komina."
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
        steelThickness: 't05',
        execution: 'nerzh_nerzh',
        insulation: 'iso30',
        diameter: 'd150_220'
    },
    variants: variants
};

fs.writeFileSync(product.filename, JSON.stringify(finalObject, null, 2), 'utf-8');
console.log(`Generated ${product.filename} with ${variants.length} variants.`);