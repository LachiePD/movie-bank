import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.jsx';
import RootPage from './routes/RootPage.jsx';
import TrendingPage from './routes/TrendingPage.jsx';
import NowPlayingPage from './routes/NowPlayingPage.jsx';
import Top100Page from './routes/Top100Page.jsx';
import ExplorePage from './routes/ExplorePage.jsx';
import {getNowPlaying} from './api/api.jsx';
const router = createBrowserRouter([{
	path:'/',
	element:<RootPage/>,
	errorElement:<ErrorPage/>,
	children:[{
		path:'/Now Playing',
		element:<NowPlayingPage/>,
		errorElement:<ErrorPage/>,	
		loader:getNowPlaying,
	},
		{
			path:'Trending',
			element:<TrendingPage/>,
			errorElement:<ErrorPage/>,
		},
		{
			path:'Top100',
			element:<Top100Page/>,
			errorElement:<ErrorPage/>,
		},
		{
			path:'Explore',
			element:<ExplorePage/>,
			errorElement:<ErrorPage/>,
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
