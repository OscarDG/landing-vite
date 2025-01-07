import { useContext } from "react";
import { FilterContext } from "../contexts/filter.jsx";

export function UseFilter (){

    const {filters, setFilters} = useContext(FilterContext)

    const filterProducts = (products) => {
        return products.filter(product => {
            return(
                filters.category === 'all' || product.category === filters.category
            )
        })
    }

    return (filters, filterProducts, setFilters)
}

