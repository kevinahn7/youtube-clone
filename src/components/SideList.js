import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from "@material-ui/icons/Menu";
import Home from "@material-ui/icons/Home";
import Whatshot from "@material-ui/icons/Whatshot";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Cast from "@material-ui/icons/Cast";
import Brightness from "@material-ui/icons/Brightness5";
import Flag from "@material-ui/icons/Flag";
import Help from "@material-ui/icons/Help";
import Announcement from "@material-ui/icons/Announcement";
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
        backgroundColor: "#f5f5f5"
    }

    const sideListContentContainerStyle = {
        height: "calc(100vh - 57px)"
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

    const signInContainerStyle = {
        padding: "16px 32px 12px 32px",
        borderBottom: "rgba(220, 220, 220, 1) 1px solid"
    }

    const signInWordsStyle = {
        fontSize: "0.9rem",
        lineHeight: "21px"
    }

    const signInButtonStyle = {
        borderRadius: "0%",
        marginLeft: "-11px",
        padding: "12px",
        width: "49.297px",
        height: "17px",
        boxSizing: "content-box"
    }

    const signInButtonWordsStyle = {
        fontSize: "0.8rem",
        fontWeight: "600",
        color: "hsla(214, 95%, 43%, 1)"
    }

    const aboutStyle = {
        padding: "16px 24px 0 24px"
    }

    const aboutLabelStyle = {
        marginRight: "8px",
        fontSize: "0.8rem",
        color: "hsla(0, 0%, 30%, 1)",
        fontWeight: "500"
    }

    const termStyle = {
        padding: "12px 24px 16px 24px"
    }

    const youTubeLLCStyle = {
        padding: "16px 24px"
    }

    const youTubeLLCLabelStyle = {
        fontSize: "0.8rem",
        color: "hsla(0, 0%, 60%, 1)"
    }

	return (
        <div style={sideListStyle}>
            <div style={headerStyle}>
                <IconButton style={menuButtonStyle}>
                    <Menu style={menuIconStyle}/>
                </IconButton>
                <Link to="/"><img style={youTubeLogoStyle} src={youtubeLogo} alt="The YoutTube logo"/></Link>
            </div>
            <div style={sideListContentContainerStyle} className="scrollbar">
                <div style={mainCategoriesContainerStyle}>
                    <div style={props.location.pathname === '/' ? currentPageHomeContainerStyle: mainCategoriesStyle} className="hovered"><Home style={props.location.pathname === '/' ? currentPageHomeIconStyle: mainCategoryHomeIconStyle}/> Home</div>
                    <div style={mainCategoriesStyle} className="hovered"><Whatshot style={mainCategoryOtherIconStyle} />Trending</div>
                    <div style={mainCategoriesStyle} className="hovered"><History style={mainCategoryOtherIconStyle}/>History</div>
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
                <div style={signInContainerStyle}>
                    <span style={signInWordsStyle}>Sign in now to see your channels and recommendations!</span>
                    <IconButton style={signInButtonStyle}><span style={signInButtonWordsStyle}>SIGN IN</span></IconButton>
                </div>
                <div style={bestOfYoutubeContainerStyle}>
                    <div style={bestOfYoutubeHeaderStyle}>MORE FROM YOUTUBE</div>
                    <div style={mainCategoriesStyle} className="hovered"><PlayArrow style={mainCategoryOtherIconStyle} />YouTube Premium</div>
                    <div style={mainCategoriesStyle} className="hovered"><Cast style={mainCategoryOtherIconStyle}/>Live</div>
                </div>
                <div style={bestOfYoutubeContainerStyle}>
                    <div style={mainCategoriesStyle} className="hovered"><Brightness style={mainCategoryOtherIconStyle} />Settings</div>
                    <div style={mainCategoriesStyle} className="hovered"><Flag style={mainCategoryOtherIconStyle} />Report history</div>
                    <div style={mainCategoriesStyle} className="hovered"><Help style={mainCategoryOtherIconStyle}/>Help</div>
                    <div style={mainCategoriesStyle} className="hovered"><Announcement style={mainCategoryOtherIconStyle} />Send feedback</div>
                </div>
                <div>
                    <div style={aboutStyle}>
                        <div>
                            <span style={aboutLabelStyle} className="link">About</span>
                            <span style={aboutLabelStyle} className="link">Press</span>
                            <span style={aboutLabelStyle} className="link">Copyright</span>
                        </div>
                        <div>
                            <span style={aboutLabelStyle} className="link">Contact us</span>
                            <span style={aboutLabelStyle} className="link">Creators</span>
                        </div>
                        <div>
                            <span style={aboutLabelStyle} className="link">Advertise</span>
                            <span style={aboutLabelStyle} className="link">Developers</span>
                        </div>
                    </div>
                    <div style={termStyle}>
                        <div>
                            <span style={aboutLabelStyle} className="link">Terms</span>
                            <span style={aboutLabelStyle} className="link">Privacy</span>
                            <span style={aboutLabelStyle} className="link">Policy & Safety</span>
                        </div>
                        <div>
                            <span style={aboutLabelStyle} className="link">Test new features</span>
                        </div>
                    </div>
                    <div style={youTubeLLCStyle}><span style={youTubeLLCLabelStyle}>© 2018 YouTube, LLC</span></div>
                </div>
            </div>
        </div>
	);
}

export default withRouter(SideList);
