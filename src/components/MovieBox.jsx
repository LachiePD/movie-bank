import React, {useState, useEffect} from 'react';
import {getImageUrl} from '../api/api';
const MovieBox = (props) =>{

	const [imageUrl, setImageUrl] = useState("");
	useEffect(()=>{
		const fetchImageUrl = async() =>{
		try{
			const url = await getImageUrl("w342", props.movie.poster_path);
			setImageUrl(url);
		}catch(e){console.error(e)}
		};

		fetchImageUrl();
	}, [props.movie.poster_path]);


	const movie = props.movie;
	return(
		<div className="movieBox">
		
		<div className="movieBoxHeader">
		<h2>{props.movie.original_title}</h2>
		</div>

		<div className="movieBoxImage">
		<img src={imageUrl} alt={props.movie.original_title + "SHould be image"}/>
		</div>
		<div className="movieBoxContent">

		<div className="movieBoxOverview">
		<p>{movie.overview}</p>
		</div>

		</div>

		</div>
	);
}

export default MovieBox;
