import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import youtubeLogo from '../assets/youtube-logo.png';

const SideList = () => {
    const sideListStyle = {
        width: "240px",
        height: "100vh",
        backgroundColor: "#f5f5f5"
    }

    const headerStyle = {
        height: "57px",
        paddingLeft: "16px",
        display: "flex",
        alignItems: "center",
        borderBottom: "hsla(0, 0%, 93%, 1) 1px solid",
        boxSizing: "border-box"
    }

    const menuButtonStyle = {
        padding: "8px",
        marginRight: "16px",
        height: "24px",
        width: "24px",
        boxSizing: "content-box",
        opacity: "0.7"
    }

    const menuIconStyle = {
        width: "24px",
        height: "24px"
    }

    const youTubeLogoStyle = {
        height: "38px",
        marginTop: "5px",
        paddingRight: "51px"
    }

	return (
        <div style={sideListStyle}>
            <div style={headerStyle}>
                <IconButton style={menuButtonStyle}>
                    <Menu style={menuIconStyle}/>
                </IconButton>
                <Link to="/"><img style={youTubeLogoStyle} src={youtubeLogo} alt="The YoutTube logo"/></Link>
            </div>
            
        </div>
	);
}

export default SideList;
