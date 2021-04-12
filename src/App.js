import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Members from './components/Members';
import Sort from './components/Sort';
import Filter from './components/Header';
import Contacts from './components/Contacts';
import NotFoundPage from './components/NotFoundPage';
import { Route, Switch } from 'react-router-dom';

import './App.css';


const App = () => {
	
	
  return (
	 
    <div className="App">
    <Header />
	
    <Switch>
		<Route exact path="/" component={Home} />
		<Route path="/members" component={Members} />
		<Route exact path="/sort" component={Sort} />
		<Route exact path='/filter' component={Filter} />
		<Route exact path='/contacts' component={Contacts} />
		<Route component={NotFoundPage} />
	</Switch>
    </div>
  );
}

export default App;


