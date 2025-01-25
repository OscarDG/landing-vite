import { useContext } from "react";
import { FiltersContext } from "../contexts/filterContext";

export function useFilter(){

    const {filters, setFilters} = useContext(FiltersContext)//trae los filters del contexto - consume el contexto

    const filterProducts = (products) => {
        return products.filter(product => {

            //const filterName = filters.name === '' || product.name.toLowerCase().includes(filters.name.toLowerCase())
            //const fileterCategory = filters.category === 'All' || product.category === filters.category

            if(filters.name === '' && filters.category === 'All'){
                console.log("condición 1")
                return filters.category === 'All'
            }else if(filters.name === '' && filters.category !== 'All'){
                console.log("condición 2")
                return filters.category === product.category
            }else if(filters.name !== ''){
                if(product.name.toLowerCase().includes(filters.name.toLowerCase())){
                    console.log("condición anidada 1")
                    return product.name.toLowerCase().includes(filters.name.toLowerCase())
                }else{
                    console.log("condición anidadad 2")
                    return false
                }
            }

        })
    }

    return {filterProducts, setFilters, filters}
};
