import Car from './Car';
import classes from './CarList.module.css'

function CarList({ ListOfCars }) {
    return (
        <ul className={classes.list}>
            {ListOfCars.map(car => 
            <Car key={car.id} 
                id={car.id}
                image={car.image}
                mark={car.mark}
                date={car.date}
                price={car.price}
                description={car.description}
            />)}
        </ul>
    )
}

export default CarList
