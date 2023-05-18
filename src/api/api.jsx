const key = process.env.REACT_APP_API_KEY;
const url= process.env.REACT_APP_API_URL;



const callCreation = async(query) =>{
	
	const response = await fetch(`${url}${query}?api_key=${key}`);
	const data = await response.json();
	return data;
}


export const getNowPlaying = async() =>{

	const response = await callCreation("3/movie/now_playing");

	const data = await response;
	return data.results;
}
