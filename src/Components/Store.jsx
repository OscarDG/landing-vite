import { StoreCategories } from "./StoreCategories"
import { StoreLook } from "./StoreLook"
import { StoreProducts } from "./StoreProducts"
import { StoreNav } from "./StoreNav"
import {products as initialProducts} from '../data/products.js'
import { useState } from "react"

export function Store(){

    const [products] = useState(initialProducts)

    const [filters, setFilters] = useState({
        category: 'All',
    });

    const filterProducts = (products) => {
        return products.filter(product => {
            return(
                filters.category === 'All' || product.category === filters.category
            )
        })
    }

    const filteredProducts = filterProducts(products)

    return(
        <>
            <StoreLook />
            <StoreCategories filters={setFilters}/>
            <StoreProducts products = {filteredProducts}/>
            <StoreNav />
        </>
    )
};