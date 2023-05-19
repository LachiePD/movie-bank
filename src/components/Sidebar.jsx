import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Sidebar = () =>{
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
					<Link id="sidebarListLink"to={`/${ele}`} key={index}>
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
