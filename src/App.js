
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';
import Restaurant from './components/Restaurant/Restaurant';



function App() {

  return (

    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Restaurant></Restaurant>
          </Route>
          <Route exact path='/home'>
            <Restaurant></Restaurant>
          </Route>
          <Route exact path='/restaurant'>
            <Restaurant></Restaurant>
          </Route>

          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/meal/:mealId'>
            <MealDetails></MealDetails>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;
