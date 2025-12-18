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
    name: "Теплообмінник водяний 14л (AISI 321 1мм)",
    description: "Ефективний елемент для нагріву води від димохідної труби. Ємність бака 14 літрів. \n\nВиріб складається з трьох частин:\n1. Труба димохідна 1м (d120мм, 1мм, AISI 321);\n2. Водяний бак-регістр 0,6м (d220мм, 1мм, AISI 321);\n3. Перехідник d120-/120+ (1мм, AISI 321).",
    image: "/assets/wymiennik_ciepla.png"
};

const finalObject = {
    baseCode: product.baseCode,
    name: product.name,
    description: product.description,
    baseImage: product.image,
    benefits: [
        {
            title: "Економія енергії",
            text: "Дозволяє отримати 14 літрів гарячої води за рахунок тепла, яке зазвичай вилітає в трубу."
        },
        {
            title: "Надійність матеріалів",
            text: "Всі елементи (труба, бак, перехідник) виготовлені з жароміцної сталі AISI 321 товщиною 1мм."
        },
        {
            title: "Готовий комплект",
            text: "Повністю зібраний вузол, готовий до монтажу на димохід діаметром 120мм."
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