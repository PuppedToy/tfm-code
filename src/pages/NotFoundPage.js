import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// @TODO
const NotFoundPage = function() {

	return (
		<Fragment>
			<Helmet>
				<title>404 NOT FOUND</title>
			</Helmet>
			<div>404 Not Found</div>
		</Fragment>
	);

}

export default NotFoundPage;