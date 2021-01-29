import React from 'react'
import SidebarRow from './SidebarRow'
import "./Sidebar.css";

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AlbumIcon from '@material-ui/icons/Album';
import { useStateValue } from './StateProvider';

const sidebarData=[
                // {title:"", src: "", Icon:"" },
                {title:"COVID", src: "", Icon:AccessAlarmIcon },
                {title:"people", src: "", Icon:AccountCircleIcon },
                {title:"Pages", src: "", Icon:AirplanemodeActiveIcon },
                {title:"Groups", src: "", Icon:AirportShuttleIcon },
                {title:"Interest", src: "", Icon:AlbumIcon },
            ]

function Sidebar() {
    const [{user}, dispatch ]=useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
            />
            {
                sidebarData.map(item =>{
                    return(
                        <SidebarRow {...item}/>
                    )                    
                })
            }
            <SidebarRow /> 
        </div>
    )
}

export default Sidebar
