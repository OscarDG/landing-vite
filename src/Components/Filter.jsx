import ClothesIcon from '../assets/Clothes.tsx'
import Wearables from '../assets/wearables'
import BallsIcon from '../assets/Balls.tsx'
import { AllItems } from '../assets/allItems.tsx'
import { useState, useId } from 'react';
import '../css/Store.css'
import { useFilter } from '../hooks/useFilters.js';


export function Filter (){

      const categories = [
        { name: 'All', id: 0, icon: <AllItems/> },
        { name: 'Clothes', id: 1, icon: <ClothesIcon /> },
        { name: 'Wearables', id: 2, icon: <Wearables /> },
        { name: 'Gadgets', id: 3, icon: <BallsIcon /> }
    ]

    const {setFilters, filters} =  useFilter()

    const [active, setActive] = useState(null);
    const categoryId = useId()

    const handleClick = ( index, category ) => {
        setActive(prev => (prev === index ? null : index));
 
        setFilters(prevState => ({
            ...prevState,
            category: category
        }))
    };

    const categoriesList = categories.map((category) => {
        return (
            <li key={category.id}
            className={`categories__list__${category.name} ${active === category.id ? 'active' : ''}`}>
                <button className='categories__button' type='button' id={categoryId} value={category.name} onClick={ ()=> handleClick(category.id, category.name)}>
                    {category.icon}
                </button>
                <label htmlFor={categoryId}>{category.name}</label>
            </li>
            )
        }
    )

    return(
        <ul className='categories__list'>
            {categoriesList}
        </ul>
    )
}