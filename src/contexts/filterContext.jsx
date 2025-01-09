import { createContext } from "react";
import { useState } from "react";

export const FiltersContext = createContext() //crea el contexto - que se va a consumir

export function FiltersProvider ({children}){

const [filters, setFilters] = useState({//creo un estado global en el contexto para usar en otros lados donde se consume el contexto
    category: 'All',
    name: ''
})

    return(
        <FiltersContext.Provider value={{//Se crea el proveedor de contexto
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}