import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ProductConfigurator from '../components/ProductConfigurator';

import pipe1mData from '../data/products/pipe1m/pipe1m.json';
import deflectorData from '../data/products/deflector/deflector.json';
import kogutData from '../data/products/kogut/kogut.json';
import wolperData from '../data/products/wolper/wolper.json';
import grzybekData from '../data/products/grzybek/grzybek.json';
import iskrochronData from '../data/products/iskrochron/iskrochron.json';
import stozekData from '../data/products/stozek/stozek.json';
import zakonczenieKominaData from '../data/products/zakonczenie_komina/zakonczenie_komina.json';
import siatkaData from '../data/products/siatka/siatka.json';

const productsMap = {
    "RP-100": pipe1mData,
    "DF-01": deflectorData,
    "NK-02": kogutData,
    "WW-03": wolperData,
    "PG-04": grzybekData,
    "IS-05": iskrochronData,
    "US-06": stozekData,
    "ZK-07": zakonczenieKominaData,
    "SO-08": siatkaData,
};

const ProductPage = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const product = productsMap[code];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [code]);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#13151A] pt-32 flex justify-center">
                <h1 className="text-white text-2xl">Product not found (Code: {code})</h1>
            </div>
        );
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

                <ProductConfigurator productData={product} />
            </div>
        </section>
    );
};

export default ProductPage;