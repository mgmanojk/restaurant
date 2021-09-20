
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import RestaurantList from './components/RestaurantList'
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantDetial from './components/RestaurantDetial';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantCreate from './components/RestaurantCreate';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/list" component={RestaurantList}></Route>
        <Route path="/detail" component={RestaurantDetial}></Route>
        <Route path="/update" component={RestaurantUpdate}></Route>
        <Route path="/create" component={RestaurantCreate}></Route>
        <Route path="/search" component={RestaurantSearch}></Route>
      </Router>
    </div>
  );
}

export default App;
