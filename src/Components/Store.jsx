import { StoreCategories } from "./StoreCategories"
import { StoreLook } from "./StoreLook"
import { StoreProducts } from "./StoreProducts"
import { StoreNav } from "./StoreNav"
import { useState } from "react"
import {products as initialProducts} from '../data/products.js'
import { useFilter } from "../hooks/useFilters.js"
import { CartProvider } from "../contexts/CartContext.jsx"

export function Store(){

    const [products] = useState(initialProducts)

    const {filterProducts} = useFilter()

    const filteredProducts = filterProducts(products)

      return(
        <CartProvider>
            <StoreLook />
            <StoreCategories />
            <StoreProducts products={filteredProducts} />
            <StoreNav />
        </CartProvider>
    )
};