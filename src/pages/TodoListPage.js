import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// @TODO
const TodoListPage = function() {

	return (
		<Fragment>
			<Helmet>
				<title>Rocket TODO List</title>
			</Helmet>
			<div>This is the TODO List page!</div>
		</Fragment>
	);

}

export default TodoListPage;