import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ProductConfigurator from '../components/ProductConfigurator';

import { productsMap } from '../data/productsMap';

const ProductPage = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const rawProductData = productsMap[code];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [code]);

    if (!rawProductData) {
        return (
            <div className="min-h-screen bg-[#13151A] pt-32 flex justify-center">
                <h1 className="text-white text-2xl">Product not found (Code: {code})</h1>
            </div>
        );
    }

    const trKey = `catalog.products.${rawProductData.baseCode}`;

    const productData = {
        ...rawProductData,
        name: t(`${trKey}.name`),
        description: t(`${trKey}.description`),
        benefits: t(`${trKey}.benefits`, { returnObjects: true })
    };

    if (!Array.isArray(productData.benefits)) {
        productData.benefits = [];
    }

    return (
        <section className="min-h-screen bg-[#13151A] pt-24 pb-12 px-6">
            <div className="max-w-[1200px] mx-auto">

                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-[#A0AEC0] hover:text-[#FF4F00] transition-colors cursor-pointer bg-transparent border-none p-6"
                >
                    <ArrowLeft className="w-5 h-5" />
                    {t('product_page.back')}
                </button>

                <ProductConfigurator productData={productData} />
            </div>
        </section>
    );
};

export default ProductPage;