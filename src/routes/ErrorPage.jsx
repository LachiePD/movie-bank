import React from 'react';
import {useRouteError} from 'react-router-dom';

const ErrorPage = () =>{
	const error = useRouteError();
	console.error(error);
	return(
		<div id="errorPage">
		<h3>Oh No!</h3>
		<span>Sorry, an error has occured</span>
		<p>{error.statusText || error.message}</p>
		</div>
	);

}


export default ErrorPage;
