import { useState, useEffect, useMemo, useCallback } from 'react';
import {
    allAttributesDefinitions,
    diametersSingle,
    diametersThermo
} from '../data/attributes';

export const useProductConfiguration = (productData) => {
    const [selections, setSelections] = useState(productData.defaultSelections);
    const [currentVariantSku, setCurrentVariantSku] = useState(null);

    const isThermo = selections.chimneyType === 'thermo';
    const availableDiameters = useMemo(() => {
        return isThermo ? diametersThermo : diametersSingle;
    }, [isThermo]);

    const availableExecutions = useMemo(() => {
        const allExecs = allAttributesDefinitions.execution;
        if (isThermo) {
            return allExecs.filter(e => ['nerzh_oc', 'nerzh_nerzh'].includes(e.id));
        } else {
            return allExecs.filter(e => ['nerzh', 'oc'].includes(e.id));
        }
    }, [isThermo]);


    const getValidVariants = useCallback((filters) => {
        return productData.variants.filter(variant => {
            return Object.keys(filters).every(key => {
                if (filters[key] === null) return true;
                return variant.attributes[key] === filters[key];
            });
        });
    }, [productData]);


    const handleSelectionChange = (attribute, newValue) => {
        setSelections(prev => {
            const next = { ...prev, [attribute]: newValue };

            if (attribute === 'chimneyType') {
                const newIsThermo = newValue === 'thermo';

                if (newIsThermo) {
                    next.insulation = allAttributesDefinitions.insulation[0].id;
                } else {
                    next.insulation = null;
                }

                const validExecs = newIsThermo
                    ? ['nerzh_oc', 'nerzh_nerzh']
                    : ['nerzh', 'oc'];

                if (!validExecs.includes(next.execution)) {
                    next.execution = validExecs[1];
                }
            }

            const filtersForDiameter = {
                chimneyType: next.chimneyType,
                steelGrade: next.steelGrade,
                steelThickness: next.steelThickness,
                execution: next.execution,
            };
            if (next.chimneyType === 'thermo') {
                filtersForDiameter.insulation = next.insulation;
            }

            const validVariants = getValidVariants(filtersForDiameter);

            if (validVariants.length > 0) {
                const currentDiameterExists = validVariants.some(v => v.attributes.diameter === next.diameter);

                if (!currentDiameterExists) {
                    next.diameter = validVariants[0].attributes.diameter;
                }
            } else {

            }

            return next;
        });
    };


    useEffect(() => {
        const searchFilters = { ...selections };
        if (selections.chimneyType === 'single') delete searchFilters.insulation;

        const match = productData.variants.find(variant => {
            return Object.keys(searchFilters).every(key =>
                variant.attributes[key] === searchFilters[key]
            );
        });

        setCurrentVariantSku(match ? match.sku : null);
    }, [selections, productData]);


    const checkOptionAvailability = useCallback((attributeToCheck, potentialValue) => {
        const testSelections = {
            ...selections,
            [attributeToCheck]: potentialValue
        };

        if (attributeToCheck === 'chimneyType') {
            if (potentialValue === 'single') testSelections.insulation = null;
            if (potentialValue === 'thermo' && !testSelections.insulation) testSelections.insulation = 'iso30';
        }

        const filters = { ...testSelections };
        if (filters.chimneyType === 'single') delete filters.insulation;

        if (attributeToCheck !== 'diameter') {
            delete filters.diameter;
        }

        return productData.variants.some(variant => {
            return Object.keys(filters).every(key => {
                if (filters[key] === null) return true;
                return variant.attributes[key] === filters[key];
            });
        });
    }, [selections, productData]);

    return {
        selections,
        currentVariantSku,
        isThermo,
        availableDiameters,
        availableExecutions,
        handleSelectionChange,
        hasAttr: (attr) => productData.applicableAttributes.includes(attr),
        allAttributesDefinitions,
        checkOptionAvailability
    };
};