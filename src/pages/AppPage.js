import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import TodoListPage from './TodoListPage';
import NotFoundPage from './NotFoundPage';

const AppPage = function() {

	return (
		<Router>
			<Helmet>
				<title>React Rocket Project</title>
				<meta name="description" content="This is a new React Project" />
			</Helmet>
			<div>
				<Link to='/'>Welcome</Link>
			</div>
			<div>
				<Link to='/todo'>TODO</Link>
			</div>
			<Switch>
				<Route exact path='/' component={WelcomePage} />
				<Route path='/todo' component={TodoListPage} />
				<Route path='*' component={NotFoundPage} />
			</Switch>
		</Router>
	);

};

export default AppPage;