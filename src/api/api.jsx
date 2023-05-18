const key = process.env.REACT_APP_API_KEY;
const url= process.env.REACT_APP_API_URL;


const callCreation = async(query) =>{

	const response = await fetch(`${url}${query}?api_key=${key}`);
	const data = await response.json();
	return data;
}


const getConfig = async() =>{
	const res = await callCreation(`3/configuration`)
	const data = await res;
	return data;
}

export const getNowPlaying = async() =>{
	const response = await callCreation("3/movie/now_playing");
	const data = await response;
	return data.results;
}

export const getImageUrl = async (size, path)=>{
	try{
		const res = await getConfig();
		const config = await res;
		const baseUrl = await config.images.base_url;
		
		const imageUrl = `${baseUrl}${size}${path}`;
		return await imageUrl;
	}catch(e){console.error(e)}

}
