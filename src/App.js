import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/'>
            <Restaurant></Restaurant>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
