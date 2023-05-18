import React from 'react';
import {useLoaderData} from 'react-router-dom';

const NowPlayingPage =() =>{
	const apiData= useLoaderData();
	console.log(apiData);
	return(
		<div id="NowPlayingPage">
Hey		</div>
	);

}

export default NowPlayingPage;
