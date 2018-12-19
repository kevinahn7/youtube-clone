import React from 'react'
import PropTypes from 'prop-types';
import SideList from './SideList';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from './../actions';
import youtubeLogo from '../assets/youtube-logo.png';
import Search from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";
import Menu from "@material-ui/icons/Menu";
import Sms from '@material-ui/icons/Sms';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

class TopNav extends React.Component {
    state = {
      sideListOpen: false,
      watchSideList: false
    }

    topNavStyle = {
        height: "56px",
        padding:"0 16px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0 1px #eee",
        width: "100%",
        boxSizing: "border-box",
        position: "fixed"
    }

    sideListButtonStyle = {
        padding: "8px",
        marginRight: "16px",
        opacity: "0.7"
    }

    youtubeLogoStyle = {
        height: "38px",
        marginTop: "5px",
        paddingRight: "51px"
    }

    searchForm = {
        width: "53%",
        margin: " 0 auto",
        display: "flex",
        justifyContent: "center"
    }

    searchIcon = {
        height: "20px",
        width: "20px",
        opacity: "0.5",
        paddingTop: "3px",
        paddingLeft: "2px"
    }

    inputStyle = {
        height: "32px",
        width: "100%",
        maxWidth: "575px",
        padding: "0",
        border: "lightgray 1px solid",
        borderRight: "none",
        fontSize: "15.5px",
        paddingLeft: "11px",
        boxSizing: "border-box",
        fontWeight: "400",
        paddingBottom: "3px",
        letterSpacing: "0.5px"
    }

    buttonStyle = {
        boxSizing: "content-box",
        height: "32px",
        width: "65px",
        backgroundColor: "#f8f8f8",
        border: "lightgray 1px solid",
        cursor: "pointer",
        boxSizing: "border-box"
    }

    iconButtonStyle = {
        padding: "8px",
        margin: "4px"
    }

    iconStyle = {
        opacity: "0.7"
    }

    signInButtonStyle = {
        padding: "8px 16px"
    }

    signInStyle = {
        fontSize: "0.87rem",
        fontWeight: "500",
        color: "rgba(39, 147, 230, 1)",
        marginLeft: "4px"
    }

    toggleDrawer = () => {
        let padding = "0";
        if (this.props.location.pathname.substring(1,6) === "watch") {
            this.setState({ watchSideList: true })
        } else {
            if (window.innerWidth > 1280) {
                this.setState(state => ({ sideListOpen: !state.sideListOpen }));
                padding = this.props.sideListPadding === "240px" ? "0" : "240px";
            } else {
                this.setState(state => ({ watchSideList: !state.watchSideList }));
            }
        }
        this.props.getPadding(padding);
    };

    closeWatchSideList = () => {
        this.setState({ watchSideList: false });
    }

    handleSearch = (event) => {
        event.preventDefault();
        window.scrollTo(0, 0);
        const searchQuery = event.target.elements.searchBar.value.trim();
        if (searchQuery) {
            this.props.dispatch(fetchSearchResult(searchQuery));
            this.props.history.push(`/results/${searchQuery}`);
        }
    }

    checkSizeChange = () => {
        if (window.innerWidth < 1280) {
            this.setState(({ sideListOpen: false }))
            this.props.getPadding("0");
        } else {
            this.setState(({ watchSideList: false }))
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.checkSizeChange.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkSizeChange.bind(this))
    }

    componentDidUpdate() {
        let pathName = this.props.location.pathname;
        if (pathName.substring(1,6) === "watch" && this.state.sideListOpen) this.setState({ sideListOpen: false })
        window.onpopstate  = (e) => {
            this.setState(({ watchSideList: false }))
            if (pathName.substring(1,8) === "results") this.props.dispatch(fetchSearchResult(pathName.slice(9, pathName.length)));
        }
        if (pathName.substring(1,6) === "watch") this.props.getPadding("0")
    }

    render() {
        const sideList = (
            <SideList />
        );

        let pathName = this.props.location.pathname;
        if (pathName.substring(1,6) === "watch" || window.innerWidth < 1280) this.topNavZIndex = { zIndex: "100" }
        else this.topNavZIndex = { zIndex: "9001" }

        let messageIcon;
        if (pathName.substring(1,7) !== "result") messageIcon = <IconButton style={this.iconButtonStyle}><Sms style={this.iconStyle}/></IconButton>

        return (
            <div>
                <div style={{...this.topNavStyle, ...this.topNavZIndex}}>
                    <IconButton onClick={this.toggleDrawer} style={this.sideListButtonStyle}><Menu /></IconButton>
                    <Link to="/"><img style={this.youtubeLogoStyle} src={youtubeLogo} alt="The YoutTube logo"/></Link>
                    <form style={this.searchForm} onSubmit={this.handleSearch}>
                        <input name="searchBar" type="text" style={this.inputStyle} placeholder="Search"/>
                        <button type="submit" style={this.buttonStyle}><Search alt="Search logo" style={this.searchIcon} /></button>
                    </form>
                    <IconButton style={this.iconButtonStyle}><VideoCall style={this.iconStyle}/></IconButton>
                    <IconButton style={this.iconButtonStyle}><Apps style={this.iconStyle}/></IconButton>
                    {messageIcon}
                    <IconButton style={this.iconButtonStyle}><MoreVert style={this.iconStyle}/></IconButton>
                    <Button style={this.signInButtonStyle}><span style={this.signInStyle}>SIGN IN</span></Button>
                </div>
                <Hidden lgUp>
                    <Drawer open={this.state.sideListOpen} onClose={this.toggleDrawer} transitionDuration={200}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer}
                            onKeyDown={this.toggleDrawer}>
                            {sideList}
                        </div>
                    </Drawer>
                </Hidden>
                <Hidden mdDown>
                    <Drawer variant="persistent" anchor="left" open={this.state.sideListOpen} transitionDuration={0}>
                        {sideList}
                    </Drawer>
                </Hidden>
                <Drawer open={this.state.watchSideList} onClose={this.closeWatchSideList} transitionDuration={200}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.closeWatchSideList}
                        onKeyDown={this.closeWatchSideList}>
                        {sideList}
                    </div>
                </Drawer>
            </div>
        )
    }
}

TopNav.propTypes = {
    getPadding: PropTypes.func,
    sideListPadding: PropTypes.string
};

export default withRouter(connect()(TopNav));
