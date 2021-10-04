import React, { useState, useContext } from 'react'
import { CarContext } from '../components/store/CarContext';
import CardFolder from '../components/ui/CardFolder';
import classes from './AddNewCar.module.css';
import { useHistory } from 'react-router-dom';

function AddNewCar() {
    const history = useHistory();

    const[image, setImage] = useState('');    
    const[mark, setMark] = useState('');    
    const[date, setDate] = useState('');    
    const[price, setPrice] = useState('');    
    const[description, setDescription] = useState('');  

    const[cars, setCars]= useContext(CarContext);

    const uptadeImage = e =>{
    setImage(e.target.value)
    }
    const uptadeMark = e =>{
    setMark(e.target.value)
    }
    const uptadeDate = e =>{
    setDate(e.target.value)
    }
    const uptadePrice = e =>{
    setPrice(e.target.value)
    }
    const uptadeDescription = e =>{
    setDescription(e.target.value)
    }


    const addCar = e =>{
        e.preventDefault();
        const id = Math.floor(Math.random() * 9999);

        setCars(previusCars => [...previusCars, 
        {
            id: id,
            mark: mark,
            image: image,
            date: date,
            description: description,
            price: price
        }
        ])
        history.replace('/');
    }
        
    

    return (
        <div>
            <h1>So this is secret page where u add cars!</h1>
            <CardFolder>
                <form className={classes.form} onSubmit={addCar}>
                    <div className={classes.control}>
                        <label htmlFor='slika'>Slika:</label>
                        <input type='url' required id='slika' value={image} onChange={uptadeImage} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='marka'>Marka:</label>
                        <input type='text' required id='marka'  onChange={uptadeMark}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='godiste' >Godiste:</label>
                        <input type='text' required id='godiste'  onChange={uptadeDate}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='cena' >Cena:</label>
                        <input type='text' required id='cena'  onChange={uptadePrice}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='description' >Opis: </label>
                        <textarea
                            id='description'
                            required
                            rows='5'
                            onChange={uptadeDescription}
                        ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button>Add Car</button>
                    </div>
                </form>
            </CardFolder>
        </div>
    )
}

export default AddNewCar
