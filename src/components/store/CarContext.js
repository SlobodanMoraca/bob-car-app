import React from 'react'
import { useState, createContext } from 'react'

export const CarContext = createContext();

export function CarProvider({ children }) {

const [cars, setCars] = useState([
    {
        id: 1,
        mark: 'Pegoet',
        image: 'https://www.theauto.eu/wp-content/uploads/2018/09/Peugeot-508-SW-02.jpg',
        date: 2020,
        description: 'This is new Peguet 508 SW, it comes in light olive green and can be yours',
        price: 37000
    
    },
    {
        id: 2,
        mark: 'Audi',
        image: 'https://media.autoexpress.co.uk/image/private/s--QJ2V9Bu3--/v1588858888/autoexpress/2020/05/Audi%20RS%205%20Coupe-6.jpg',
        date: 2021,
        description: 'This is new Audi RS 5 coupe, it comes in metalic coulor and it is the best',
        price: 42000
    
    },
    {
        id: 3,
        mark: 'Mercedes',
        image: 'https://vrelegume.rs/wp-content/uploads/2020/05/mercedes-amg-e-53-coupe-2020-10.jpg',
        date: 2022,
        description: 'This is mercedes benz E53, it comes in all colors as long as they black',
        price: 79000
}
])

    return (
        <CarContext.Provider value={[cars, setCars]}>
            { children }
        </CarContext.Provider>
    )
}
