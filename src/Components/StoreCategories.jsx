import '../css/Store.css'
import { useState } from 'react'
import { AllItems } from '../assets/allItems.tsx'
import ClothesIcon from '../assets/Clothes.tsx'
import Wearables from '../assets/wearables'
import BallsIcon from '../assets/Balls.tsx'

export function StoreCategories(){

const categories = [
    { name: 'All', id: 0, icon: <AllItems/> },
    { name: 'Clothes', id: 1, icon: <ClothesIcon /> },
    { name: 'Wearables', id: 2, icon: <Wearables /> },
    { name: 'Gadgets', id: 3, icon: <BallsIcon /> }
];

const [active, setActive] = useState(null)


const handleClick = (index) => {
    setActive(prev => (prev === index ? null : index))
    //setSelectedCategory(categories[index].name)
}

const categoriesList = categories.map((category) => {
    return (
        <li key={category.id} 
        className={`categories__list__${category.name} ${active === category.id ? 'active' : ''}`} 
        onClick={()=> handleClick(category.id)}>
            {category.icon}
            <span>{category.name}</span>
        </li>
    )
})

    return(
        <section className='categories'>
            <div className='categories__wrap'>
                <ul className='categories__list'>
                    {categoriesList}
                </ul>
            </div>
        </section>
    )
};

