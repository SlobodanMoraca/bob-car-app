import { Route, Switch } from 'react-router-dom';


import HomePage from './pages/Home';
import CatalogPage from './pages/Catalog';
import PaymentPage from './pages/Payment';
import AboutPage from './pages/About';
import Layout from './components/layout/Layout';
import AddNewCar from './pages/AddNewCar';
import { CarProvider } from './components/store/CarContext'



function App() {
  return (
    <CarProvider>
      <Layout>
        <Switch> 
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/catalog'>
            <CatalogPage />
          </Route>
          <Route path='/payment'>
            <PaymentPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/addNewCar'>
            <AddNewCar />
          </Route>
        </Switch> 
      </Layout> 
    </CarProvider>
  );
}

export default App;
