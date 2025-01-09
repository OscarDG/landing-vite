import { useContext } from "react";
import { FiltersContext } from "../contexts/filterContext";

export function useFilter(){

    const {filters, setFilters} = useContext(FiltersContext)//trae los filters del contexto - consume el contexto
    
    const filterProducts = (products) => {
        return products.filter(product => {
            return(
                product.name === filters.name || filters.name === '' &&
                (filters.category === 'All' || product.category === filters.category)
            )
        })
    }

    return {filterProducts, setFilters, filters}
};
