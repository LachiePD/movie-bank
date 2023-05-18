import React from 'react';
import {useLoaderData} from 'react-router-dom';
import MovieBox from '../components/MovieBox.jsx';

const NowPlayingPage =() =>{
	const apiData= useLoaderData();
	return(
		<div id="nowPlayingPage">
			<div id="nowPlayingHeader">
		<h2>See Whats On</h2>
		
		</div>
		
		<div id="nowPlayingPageContent">
		{apiData.map((movie) =>{
			return(
				<MovieBox movie={movie}/>
				
			)

		})
		}
		</div>

		</div>
	);

}

export default NowPlayingPage;
