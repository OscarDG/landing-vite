import ClothesIcon from '../assets/Clothes.tsx'
import Wearables from '../assets/wearables'
import BallsIcon from '../assets/Balls.tsx'
import { AllItems } from '../assets/allItems.tsx'
import { useState } from 'react';
import '../css/Store.css'

export function Filter ({changeFilters}){

    const categories = [
        { name: 'All', id: 0, icon: <AllItems/> },
        { name: 'Clothes', id: 1, icon: <ClothesIcon /> },
        { name: 'Wearables', id: 2, icon: <Wearables /> },
        { name: 'Gadgets', id: 3, icon: <BallsIcon /> }
    ]

    const [active, setActive] = useState(null);

    const handleClick = ( index, name ) => {
        setActive(prev => (prev === index ? null : index));
 
        changeFilters(prevState => ({
            ...prevState,
            category: name
        }))
    };

    const categoriesList = categories.map((category) => {
        return (
            <li key={category.id}
            className={`categories__list__${category.name} ${active === category.id ? 'active' : ''}`}>
                <button className='categories__button' type='button' id='category' value={category.name} onClick={ ()=> handleClick(category.id, category.name)}>
                    {category.icon}
                    <label htmlFor='category'>{category.name}</label>
                </button>
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