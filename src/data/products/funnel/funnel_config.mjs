import fs from 'fs';


const single_304_t05 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];


const generateVariants = () => {
    const variants = [];
    const baseCode = 'OD-18';

    const add = (type, grade, thick, exec, ins, diameters) => {
        diameters.forEach(d => {
            const dStr = String(d);
            const safeId = `d${dStr.replace('/', '_')}`;
            const safeSkuDiam = dStr.replace('/', '-');

            const typeCode = type === 'single' ? 'S' : 'T';
            const gradeCode = grade.slice(3);
            const thickCode = thick.slice(1);

            let execCode = 'N';

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

    return variants;
};


const product = {
    filename: 'funnel.json',
    baseCode: 'OD-18',
    name: "Odskraplacz / Lejek (Лейка)",
    description: "Element montowany w dolnej części komina. Służy do odprowadzania skroplin (kondensatu) powstających w procesie spalania.",
    image: "/assets/lejek.png"
};


const variants = generateVariants();

const finalObject = {
    baseCode: product.baseCode,
    name: product.name,
    description: product.description,
    baseImage: product.image,
    benefits: [
        {
            title: "Ochrona kotła",
            text: "Zapobiega spływaniu kwaśnego kondensatu z powrotem do urządzenia grzewczego."
        },
        {
            title: "Higiena systemu",
            text: "Umożliwia łatwe i kontrolowane odprowadzanie wilgoci z przewodu kominowego."
        },
        {
            title: "Trwałość",
            text: "Wykonany ze stali kwasoodpornej, odpornej na agresywne działanie skroplin."
        }
    ],
    applicableAttributes: [
        'steelGrade', 'steelThickness',
        'execution', 'diameter'
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

fs.writeFileSync(product.filename, JSON.stringify(finalObject, null, 2), 'utf-8');
console.log(`Generated ${product.filename} with ${variants.length} variants.`);