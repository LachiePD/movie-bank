

{/*cheeky*/}
import React , {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {HeaderContext} from '../index.js';
const Sidebar = () =>{
	const {header, setHeader} = useContext(HeaderContext);
	const listOptions = ["Now Playing", "Trending", "TopRated", "Explore"];
	const navigate = useNavigate();
	return(
<div id="sidebar">
                 <div id="sidebarHeader">
                <h2>Movie Bank, baby!</h2>
                </div>

                <div id="sidebarList">
                        {listOptions.map((ele, index) =>{
                                return(
					<Link id="sidebarListLink" onClick={() =>setHeader(`${ele}`)} to={`/${ele}`} key={index}   
					>
		                       <li id="listItem" key={index}>
                      			<span id='sidebarListSpan'>{ele}</span>
					</li>
					</Link>
					
                                );
                        })
                        }

                </div>
                </div>
	)
}

export default Sidebar;
