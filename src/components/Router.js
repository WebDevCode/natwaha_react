import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';
import notFound from './404';


const Router = () => (
  <BrowserRouter>
    <div>
    	<Header />
	  	<Switch>
    		<Route exact path="/" component={Home} />
    		<Route exact path="/about" component={About} />
    		<Route component={notFound} />
    	</Switch>
    </div>
  </BrowserRouter>
);

export default Router;