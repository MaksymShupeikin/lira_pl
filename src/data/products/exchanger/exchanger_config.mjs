import fs from 'fs';
// node src/data/products/exchanger/exchanger_config.mjs


const specific_diameter = ['120'];


const generateVariants = () => {
    const variants = [];
    const baseCode = 'WX-23';

    const add = (type, grade, thick, exec, ins, diameters) => {
        diameters.forEach(d => {
            const dStr = String(d);
            const safeId = `d${dStr.replace('/', '_')}`;
            const safeSkuDiam = dStr.replace('/', '-');

            const typeCode = 'S';
            const gradeCode = grade.slice(3);
            const thickCode = thick.slice(1);
            
            let execCode = 'N';

            const sku = `${baseCode}-${typeCode}-${gradeCode}-${thickCode}-${execCode}-${safeSkuDiam}`;

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

    add('single', 'ais321', 't10', 'nerzh', null, specific_diameter);

    return variants;
};


const variants = generateVariants();

const product = {
    filename: 'exchanger.json',
    baseCode: 'WX-23',
    image: "/assets/wymiennik_ciepla.png"
};

const finalObject = {
    baseCode: product.baseCode,
    baseImage: product.image,
   
    applicableAttributes: [
        'steelGrade', 
        'steelThickness',
        'execution', 
        'diameter'
    ],
    defaultSelections: {
        chimneyType: 'single',
        steelGrade: 'ais321',
        steelThickness: 't10',
        execution: 'nerzh',
        insulation: null,
        diameter: 'd120'
    },
    variants: variants
};

fs.writeFileSync(product.filename, JSON.stringify(finalObject, null, 2), 'utf-8');
console.log(`Generated ${product.filename} with ${variants.length} variant(s).`);