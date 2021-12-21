import React from "react";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Login from "./components/login";
import Posts from "./components/posts";
import NotFound from "./components/notfound";
import DashBoard from "./components/dashboard";
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
	return (
		<div>
			<NavBar />
			<h1>App</h1>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/dashboard" component={DashBoard} />
				<Route path="/login" component={Login} />
				<Route path="/404" component={NotFound} />
				<Route path="/posts/:postId?" component={Posts}/>
				<Redirect from="/admin" to="/dashboard"/>
				<Redirect to="/404"/>
			</Switch>
		</div>
	);
}

{
	/*
					   render={(props) => { 
					   return ( false && <DashBoard isAdmin={false} {...props} />)}}

*/
}

export default App;
