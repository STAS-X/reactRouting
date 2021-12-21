import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<ul>
			<li>
				<Link to="/home">Home</Link>
			</li>
			<li>
				<Link to="/dashboard/stats">Stats</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/posts">Posts</Link>
			</li>
			<li>
				<Link to="/dashboard">DashBoard</Link>
			</li>
		</ul>
	);
};

export default NavBar;
