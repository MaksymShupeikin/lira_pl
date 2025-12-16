import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ image, code, name }) => {
    const { t } = useTranslation();

    return (
        <Link to={`/product/${code}`} className="bg-[#1C1F26] border border-white/5 hover:border-[#FF4F00] transition-all duration-200 group p-4 flex flex-col cursor-pointer block">
            <div className="w-full h-32 flex items-center justify-center mb-4 overflow-hidden rounded-sm">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500 will-change-transform"
                />
            </div>
            <div className="h-[72px] flex flex-col justify-center">
                <span className="text-[10px] text-[#A0AEC0] block mb-1 font-mono">{t('catalog.code_label')}: {code}</span>
                <span className="text-sm font-bold text-white uppercase leading-tight block line-clamp-2 overflow-hidden text-ellipsis">
                    {name}
                </span>
            </div>
        </Link>
    );
};

export default ProductCard;