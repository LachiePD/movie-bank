import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {getNowPlaying, getTopRated, getNowTrending, getExplore} from './api/api.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import RootPage from './routes/RootPage.jsx';
import Page from './routes/Page.jsx';
const router = createBrowserRouter([{
	path:'/',
	element:<RootPage/>,
	errorElement:<ErrorPage/>,
	children:[{
		path:'/Now Playing',
		element:<Page/>,
		errorElement:<ErrorPage/>,	
		loader:getNowPlaying,
		
	},
		{
			path:'Trending',
			element:<Page/>,
			errorElement:<ErrorPage/>,
			loader: getNowTrending,
		},
		{
			path:'TopRated',
			element:<Page/>,
			errorElement:<ErrorPage/>,
			loader:getTopRated,
		},
		{
			path:'Explore',
			element:<Page/>,
			errorElement:<ErrorPage/>,
			loader:getExplore,
		},
	]
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<RouterProvider router={router}/>
	</React.StrictMode>
);

reportWebVitals();
