import React from 'react';
import NavBar from './components/navBar';
import Home from './components/home';
import Login from './components/login';
import Posts from './components/posts';
import DashBoard from './components/dashboard';
import Stats from './components/stats';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<NavBar />
			<h1>App</h1>
			<Route path="/" exact component={Home} />
			<Route path="/dashboard" component={DashBoard} />
			<Route path="/stats" component={Stats} />
			<Route path="/login" component={Login} />
			<Route path="/posts" component={Posts} />
		</div>
	);
}

export default App;
