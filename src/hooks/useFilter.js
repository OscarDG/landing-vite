import { useContext } from "react";
import { FilterContext } from '../contexts/filterProvider.jsx'

export function useFilter(){

    const {filter, setFilter} = useContext(FilterContext)

    const filterProducts = (products) => {
        return products.filter(product => {
            return(
                filter.category === 'all' || product.category === filter.category
            )
        })
    }

    return (filter, filterProducts, setFilter)
}

