import React, {useState, useContext, createContext} from 'react';
import Sidebar from '../components/Sidebar';
import {Outlet} from 'react-router-dom';
import {HeaderContext} from '../index.js';

const RootPage = () =>{
	
	const [header, setHeader] = useState("See whats on...");
	return(
		<HeaderContext.Provider value={{header, setHeader}}>
		<div id="rootPage">
			
		<Sidebar/>
		<div id="mainContent">
			<Outlet/>	
		</div>

		</div>
		</HeaderContext.Provider>
	);
}

export default RootPage;
