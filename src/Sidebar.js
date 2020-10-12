import React from "react";
import "./Sidebar.css";

import ChatIcon from "@material-ui/icons/Chat";
import DonutLarge from "@material-ui/icons/DonutLarge";
import MoreVert from "@material-ui/icons/MoreVert";

import { Avatar, IconButton } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerLeft">
                    <Avatar />
                </div>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
