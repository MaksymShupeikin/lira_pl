import fs from 'fs';
// node src/data/products/funnel/funnel_config.mjs


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
    image: "/assets/lejek.png"
};


const variants = generateVariants();

const finalObject = {
    baseCode: product.baseCode,
    baseImage: product.image,

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