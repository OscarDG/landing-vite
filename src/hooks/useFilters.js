import { useContext } from "react";
import { FiltersContext } from "../contexts/filterContext";

export function useFilter(){

    const {filters, setFilters} = useContext(FiltersContext)//trae los filters del contexto - consume el contexto

    const containsLetter = (productName, filterName) => {
        return [...filterName].some(char => productName.include(char))
    };
    
    const filterProducts = (products) => {
        return products.filter(product => {

            const nameMatches = filters.name === '' || containsLetter(product.name.toLowerCase(), filters.name.toLowerCase());

            const categoryMatches = filters.category === 'All' || product.category === filters.category
            return(
                nameMatches && categoryMatches
            )
        })
    }

    return {filterProducts, setFilters, filters}
};
