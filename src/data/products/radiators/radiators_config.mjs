import fs from 'fs';
// node src/data/products/radiators/radiators_config.mjs


const common_diams = ['120', '130', '150', '160', '180', '200', '220', '230', '250'];


const generateVariants = (length) => {
    const variants = [];
    const baseCode = length === '0.5m' ? 'RA-050' : 'RA-100';

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

    add('single', 'ais304', 't05', 'nerzh', null, common_diams);
    add('single', 'ais304', 't08', 'nerzh', null, common_diams);
    add('single', 'ais304', 't10', 'nerzh', null, common_diams);

    add('single', 'ais321', 't08', 'nerzh', null, common_diams);
    add('single', 'ais321', 't10', 'nerzh', null, common_diams);

    return variants;
};


const products = [
    {
        filename: 'radiator05m.json',
        length: '0.5m',
        baseCode: 'RA-050',
        image: "/assets/radiator.png"
    },
    {
        filename: 'radiator1m.json',
        length: '1m',
        baseCode: 'RA-100',
        image: "/assets/radiator.png"
    }
];

products.forEach(prod => {
    const variants = generateVariants(prod.length);

    const finalObject = {
        baseCode: prod.baseCode,
        baseImage: prod.image,
        
        applicableAttributes: [
            'steelGrade', 'steelThickness',
            'execution', 'diameter'
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

    fs.writeFileSync(prod.filename, JSON.stringify(finalObject, null, 2), 'utf-8');
    console.log(`Generated ${prod.filename} with ${variants.length} variants.`);
});