import React from 'react';
import Sidebar from '../components/Sidebar';
import {Outlet} from 'react-router-dom';
const RootPage = () =>{

	return(
		<div id="rootPage">
			
		<Sidebar/>
		<div id="mainContent">
			<Outlet/>	
		</div>

		</div>
	);
}

export default RootPage;
