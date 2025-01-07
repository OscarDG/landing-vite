import { StoreCategories } from "./StoreCategories"
import { StoreLook } from "./StoreLook"
import { StoreProducts } from "./StoreProducts"
import { StoreNav } from "./StoreNav"
import {products} from '../data/products.js'

export function Store(){

    return(
        <>
            <StoreLook />
            <StoreCategories />
            <StoreProducts products = {products}/>
            <StoreNav />
        </>
    )
};