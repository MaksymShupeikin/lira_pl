import fs from 'fs';
// node src\data\products\bracket\bracket_config.mjs

const single_304_t05 = [100, 110, 120, 125, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350, 400, 450, 500];

const generateVariants = () => {
    const variants = [];
    const baseCode = 'OS-13';

    const add = (type, grade, thick, exec, ins, diameters) => {
        diameters.forEach(d => {
            const dStr = String(d);
            const safeId = `d${dStr.replace('/', '_')}`;
            const safeSkuDiam = dStr.replace('/', '-');

            const typeCode = type === 'single' ? 'S' : 'T';
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

    add('single', 'ais304', 't05', 'nerzh', null, single_304_t05);

    return variants;
};

const product = {
    filename: 'bracket.json',
    baseCode: 'OS-13',
    name: "Obejma Ścienna (Скоба кріпильна)",
    description: "Element mocujący komin do ściany. Zapewnia stabilność konstrukcji.",
    image: "/assets/obejma.png"
};

const variants = generateVariants();

const finalObject = {
    baseCode: product.baseCode,
    name: product.name,
    description: product.description,
    baseImage: product.image,
    benefits: [
        {
            title: "Stabilność",
            text: "Pewne mocowanie elementów kominowych do elewacji lub konstrukcji wsporczej."
        },
        {
            title: "Regulacja",
            text: "Umożliwia korektę odległości od ściany (przy zastosowaniu odpowiednich przedłużek)."
        },
        {
            title: "Estetyka",
            text: "Wykonana ze stali nierdzewnej, estetycznie komponuje się z resztą systemu."
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