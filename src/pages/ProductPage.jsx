import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ProductConfigurator from '../components/ProductConfigurator';


import pipe1mData from '../data/products/pipes/pipe1m.json';
import pipe05mData from '../data/products/pipes/pipe05m.json';
import pipe03mData from '../data/products/pipes/pipe03m.json';
import pipe025mData from '../data/products/pipes/pipe025m.json';
import deflectorData from '../data/products/deflector/deflector.json';
import kogutData from '../data/products/kogut/kogut.json';
import wolperData from '../data/products/wolper/wolper.json';
import grzybekData from '../data/products/grzybek/grzybek.json';
import iskrochronData from '../data/products/iskrochron/iskrochron.json';
import stozekData from '../data/products/stozek/stozek.json';
import zakonczenieKominaData from '../data/products/zakonczenie_komina/zakonczenie_komina.json';
import siatkaData from '../data/products/siatka/siatka.json';
import kolano90Data from '../data/products/elbows/elbow90.json';
import kolano45Data from '../data/products/elbows/elbow45.json';
import trojnik90Data from '../data/products/tees/tee90.json';
import trojnik45Data from '../data/products/tees/tee45.json';
import redukcjaData from '../data/products/reducer/reducer.json';
import obejmaData from '../data/products/bracket/bracket.json';
import plytaPrzelotowaData from '../data/products/plate/plate.json';
import wyczystkaData from '../data/products/revision/revision.json';
import lejekData from '../data/products/funnel/funnel.json';
import szyberData from '../data/products/damper/damper.json';
import plytaWspornikowaData from '../data/products/stand/stand.json';
import radiator1mData from '../data/products/radiators/radiator1m.json';
import radiator05mData from '../data/products/radiators/radiator05m.json';
import wymiennikCiepłamData from '../data/products/exchanger/exchanger.json';

const productsMap = {
    "RP-100": pipe1mData,
    "RP-050": pipe05mData,
    "RP-030": pipe03mData,
    "RP-025": pipe025mData,
    "DF-01": deflectorData,
    "NK-02": kogutData,
    "WW-03": wolperData,
    "PG-04": grzybekData,
    "IS-05": iskrochronData,
    "US-06": stozekData,
    "ZK-07": zakonczenieKominaData,
    "SO-08": siatkaData,
    "KL-90": kolano90Data,
    "KL-45": kolano45Data,
    "TR-90": trojnik90Data,
    "TR-45": trojnik45Data,
    "RD-20": redukcjaData,
    "OS-13": obejmaData,
    "PP-14": plytaPrzelotowaData,
    "WC-01": wyczystkaData,
    "OD-18": lejekData,
    "SZ-21": szyberData,
    "PW-19": plytaWspornikowaData,
    "RA-100": radiator1mData,
    "RA-050": radiator05mData,
    "WX-23": wymiennikCiepłamData,
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