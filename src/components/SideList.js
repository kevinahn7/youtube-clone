import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from "@material-ui/icons/Menu";
import Home from "@material-ui/icons/Home";
import Whatshot from "@material-ui/icons/Whatshot";
import History from "@material-ui/icons/History";
import { withRouter, Link } from 'react-router-dom';
import youtubeLogo from '../assets/youtube-logo.png';
import '../styles/SideListStyles.css';
import musicIcon from '../assets/music-icon.png';
import soccerIcon from '../assets/soccer-icon.png';
import gamingIcon from '../assets/gaming-icon.png';
import filmIcon from '../assets/film-icon.png';
import newsIcon from '../assets/news-icon.png';
import liveIcon from '../assets/live-icon.png';
import spotlightIcon from '../assets/spotlight-icon.png';
import videoIcon from '../assets/360-icon.png';
import plusIcon from '../assets/plus-icon.png';

const SideList = (props) => {
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
        borderBottom: "rgba(220, 220, 220, 1) 1px solid"
    }

    const mainCategoriesStyle = {
        padding: "0 24px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        fontSize: "0.87rem"
    }

    const currentPageHomeContainerStyle = {
        padding: "0 24px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        fontSize: "0.87rem",
        backgroundColor: "hsla(0, 0%, 86%, 1)",
        fontWeight: "500"
    }

    const mainCategoryHomeIconStyle = {
        marginRight: "24px",
        height: "24px",
        width: "24px",
        opacity: "0.5"
    }

    const currentPageHomeIconStyle = {
        marginRight: "24px",
        height: "24px",
        width: "24px",
        color: "red"
    }

    const mainCategoryOtherIconStyle = {
        marginRight: "26px",
        height: "22px",
        width: "22px",
        opacity: "0.5"
    }

    const bestOfYoutubeContainerStyle = {
        padding: "8px 0",
        borderBottom: "rgba(220, 220, 220, 1) 1px solid"
    }

    const bestOfYoutubeHeaderStyle = {
        padding: "8px 24px",
        fontSize: "0.87rem",
        opacity: "0.7",
        fontWeight: "500"
    }

    const bestOfYoutubeIconContainerStyle = {
        height: "40px",
        display: "flex",
        alignItems: "center",
        padding: "0 24px"
    }

    const bestOfYoutubeIconStyle = {
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        marginRight: "24px"
    }

    const bestOfYoutubeTitleStyle = {
        fontSize: "0.9rem"
    }

    const browseChannelContainerStyle = {
        padding: "8px 0",
        borderBottom: "rgba(220, 220, 220, 1) 1px solid"
    }

    const browseChannelStyle = {
        height: "40px",
        display: "flex",
        alignItems: "center",
        padding: "0 24px"
    }

    const browsePlusStyle = {
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        marginRight: "24px"
    }

    const browseChannelTitleStyle = {
        fontSize: "0.9rem"
    }

	return (
        <div style={sideListStyle} className="scrollbar">
            <div style={headerStyle}>
                <IconButton style={menuButtonStyle}>
                    <Menu style={menuIconStyle}/>
                </IconButton>
                <Link to="/"><img style={youTubeLogoStyle} src={youtubeLogo} alt="The YoutTube logo"/></Link>
            </div>
            <div style={mainCategoriesContainerStyle}>
                <div style={props.location.pathname === '/' ? currentPageHomeContainerStyle: mainCategoriesStyle} className="hovered"><Home style={props.location.pathname === '/' ? currentPageHomeIconStyle: mainCategoryHomeIconStyle}/> Home</div>
                <div style={mainCategoriesStyle} className="hovered"><Whatshot style={mainCategoryOtherIconStyle} /> Trending</div>
                <div style={mainCategoriesStyle} className="hovered"><History style={mainCategoryOtherIconStyle}/> History </div>
            </div>
            <div style={bestOfYoutubeContainerStyle}>
                <div style={bestOfYoutubeHeaderStyle}>BEST OF YOUTUBE</div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={musicIcon} /> <span style={bestOfYoutubeTitleStyle}>Music</span></div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={soccerIcon} /> <span style={bestOfYoutubeTitleStyle}>Sports</span></div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={gamingIcon} /> <span style={bestOfYoutubeTitleStyle}>Gaming</span></div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={filmIcon} /> <span style={bestOfYoutubeTitleStyle}>Movies</span></div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={filmIcon} /> <span style={bestOfYoutubeTitleStyle}>TV Shows</span></div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={newsIcon} /> <span style={bestOfYoutubeTitleStyle}>News</span></div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={liveIcon} /> <span style={bestOfYoutubeTitleStyle}>Live</span></div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={spotlightIcon} /> <span style={bestOfYoutubeTitleStyle}>Spotlight</span></div>
                <div style={bestOfYoutubeIconContainerStyle} className="hovered"><img style={bestOfYoutubeIconStyle} src={videoIcon} /> <span style={bestOfYoutubeTitleStyle}>360° Video</span></div>
            </div>
            <div style={browseChannelContainerStyle}>
                <div style={browseChannelStyle} className="hovered"><img style={browsePlusStyle} src={plusIcon} /><span style={browseChannelTitleStyle}>Browse channels</span></div>
            </div>
        </div>
	);
}

export default withRouter(SideList);
