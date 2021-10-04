import React, {useState, useContext} from 'react'
import CarList from '../components/AutoPlac/CarList';
import {CarContext} from '../components/store/CarContext';



function CatalogPage() {
    const [cars, setCars] = useContext(CarContext)

    return (
        <section>
                <h1>All cars curently avalable</h1>
                <CarList ListOfCars={cars} />
        </section>
    )
}

export default CatalogPage
