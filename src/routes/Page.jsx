import React, {useContext} from 'react';
import {useLoaderData} from 'react-router-dom';
import MovieBox from '../components/MovieBox.jsx';
import {HeaderContext} from '../index.js';
const Page =() =>{
	const {header, setHeader}= useContext(HeaderContext);
	console.log(header);
	const apiData= useLoaderData();
	return(
		<div id="nowPlayingPage">
			<div id="nowPlayingHeader">
		<h2>{header}</h2>
		
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

export default Page;
