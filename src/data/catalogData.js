import { productsMap } from './productsMap';

const getProductCardData = (code) => {
    const product = productsMap[code];
    if (!product) {
        console.warn(`Product with code ${code} not found in productsMap`);
        return { code, image: '' };
    }
    return {
        code: product.baseCode,
        image: product.baseImage
    };
};

export const catalogSections = [
    {
        id: "section-1",
        number: "01",
        products: [
            getProductCardData("DF-01"),
            getProductCardData("NK-02"),
            getProductCardData("WW-03"),
            getProductCardData("PG-04"),
            getProductCardData("IS-05"),
            getProductCardData("US-06"),
            getProductCardData("ZK-07"),
            getProductCardData("SO-08"),
        ]
    },
    {
        id: "section-2",
        number: "02",
        products: [
            getProductCardData("RP-100"),
            getProductCardData("RP-050"),
            getProductCardData("RP-030"),
            getProductCardData("RP-025"),

            getProductCardData("KL-90"),
            getProductCardData("KL-45"),

            getProductCardData("OS-13"),
            getProductCardData("PP-14"),
        ]
    },
    {
        id: "section-3",
        number: "03",
        products: [
            getProductCardData("TR-90"),
            getProductCardData("TR-45"),

            getProductCardData("WC-01"),
            getProductCardData("OD-18"),
            getProductCardData("PW-19"),

            getProductCardData("RD-20"),

            getProductCardData("SZ-21"),
            getProductCardData("RA-100"),
            getProductCardData("RA-050"),
            getProductCardData("WX-23"),
        ]
    },
];