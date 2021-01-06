import React from "react";
import { Route, Switch } from "react-router-dom";

import FridgeSummary from './components/fridgeSummaryContainer.jsx'

import Home from './pages/Home.js'
import PeoplesPage from './pages/Peoples.page.jsx'
import GermantownPage from './pages/Germantown.page.jsx'
import PhiladelphiaPage from './pages/Philadelphia.page.jsx'


import "./App.css";



function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/thepeoplesfridge" component={PeoplesPage} />
        		<Route exact path="/germantowncommunityfridge" component={GermantownPage} />
				<Route exact path="/philadelphiacommunityfridge" component={PhiladelphiaPage} />
        

			</Switch>

		</div>
	);
}

export default App;
