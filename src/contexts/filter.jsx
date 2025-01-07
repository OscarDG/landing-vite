import { createContext, useState } from "react";

export const FilterContext = createContext()

export function FilterProvider ({children}){

    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

    console.log(selectedCategory)
    return(
        <FilterContext.Provider value={{
            selectedCategory,
            setSelectedCategory
        }}>
            {children}
        </FilterContext.Provider>
    )
}