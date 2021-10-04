import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarContext } from '../store/CarContext';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  const[cars, setCars] = useContext(CarContext);

  return (
    <header className={classes.header}>
      <Link to='/'><div className={classes.logo}>™BcD</div></Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/catalog'>Catalog
              <span className={classes.badge}>{cars.length}</span>
            </Link>
          </li>
          <li>
            <Link to='/payment'>Payment </Link>
          </li>
          <li>
            <Link to='/about'> About </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;