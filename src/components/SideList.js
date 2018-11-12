import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from "@material-ui/icons/Menu";
import Home from "@material-ui/icons/Home";
import Whatshot from "@material-ui/icons/Whatshot";
import History from "@material-ui/icons/History";
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

    const mainCategoriesContainerStyle = {
        padding: "12px 0",
        borderBottom: "hsla(0, 0%, 93%, 1) 1px solid"
    }

    const mainCategoriesStyle = {
        padding: "0 24px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        fontSize: "0.87rem"
    }

    const mainCategoryHomeIconStyle = {
        marginRight: "24px",
        height: "24px",
        width: "24px",
        opacity: "0.5"
    }

    const mainCategoryOtherIconStyle = {
        marginRight: "26px",
        height: "22px",
        width: "22px",
        opacity: "0.5"
    }

	return (
        <div style={sideListStyle}>
            <div style={headerStyle}>
                <IconButton style={menuButtonStyle}>
                    <Menu style={menuIconStyle}/>
                </IconButton>
                <Link to="/"><img style={youTubeLogoStyle} src={youtubeLogo} alt="The YoutTube logo"/></Link>
            </div>
            <div style={mainCategoriesContainerStyle}>
                <div style={mainCategoriesStyle}>
                    <Home style={mainCategoryHomeIconStyle}/> Home
                </div>
                <div style={mainCategoriesStyle}>
                    <Whatshot style={mainCategoryOtherIconStyle} /> Trending
                </div>
                <div style={mainCategoriesStyle}>
                    <History style={mainCategoryOtherIconStyle}/> History
                </div>
            </div>
        </div>
	);
}

export default SideList;
