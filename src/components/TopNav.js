import React from 'react'
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from './../actions';
import youtubeLogo from '../assets/youtube-logo.png';
import Search from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";
import Menu from "@material-ui/icons/Menu";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
      sideListOpen: false,
      watchSideList: false
    }

    TopNavStyle = {
        height: "56px",
        padding:"0 16px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0 1px #eee",
        width: "100%",
        boxSizing: "border-box",
        position: "fixed",
        zIndex: "9001"
    }

    sideListButtonStyle = {
        padding: "8px",
        marginRight: "16px",
        opacity: "0.7"
    }

    imageStyle = {
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

    signInStyle = {
        fontSize: "0.87rem",
        fontWeight: "500",
        color: "rgba(39, 147, 230, 1)",
        marginLeft: "4px"
    }

    sideListStyle = {
        width: "240px"
    }

    toggleDrawer = () => {
        let padding = "0";
        if (this.props.location.pathname.substring(1,6) === "watch") {
            this.setState({
                watchSideList: true
            })
        } else {
            this.setState(state => ({
                sideListOpen: !state.sideListOpen
            }));
            padding = this.props.sideListPadding === "240px" ? "0" : "240px";
            //padding = (screen width is larger than the breakpoint) ? "240px" : "0"  to fix the issue of the margin movign even when it is the temp sidelist
            // also an issue where the screen is small and they press the toggledrawer button when the sidelist is open, it still sends out the perm sidelist out
        }
        this.props.getPadding(padding);
    };

    closeWatchSideList = () => {
        this.setState({
            watchSideList: false
        });
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

    componentDidUpdate() {
        window.onpopstate  = (e) => {
            let pathName = this.props.location.pathname;
            if (pathName.substring(1,8) === "results") this.props.dispatch(fetchSearchResult(pathName.slice(9, pathName.length)));
        }
    }

    render() {
        let pathName = this.props.location.pathname;
        if (pathName.substring(1,6) === "watch" && this.state.sideListOpen) {
            this.setState({
                sideListOpen: false
            })
        }
        const sideList = (
            <div style={this.sideListStyle}>
                <IconButton onClick={this.toggleDrawer}>
                    hello
                </IconButton>
            </div>
        );

        return (
            <div>
                <div style={this.TopNavStyle}>
                    <IconButton onClick={this.toggleDrawer} style={this.sideListButtonStyle}><Menu /></IconButton>
                    
                    <Link to="/"><img style={this.imageStyle} src={youtubeLogo} alt="The YoutTube logo"/></Link>
                    <form style={this.searchForm} onSubmit={this.handleSearch}>
                        <input name="searchBar" type="text" style={this.inputStyle} placeholder="Search"/>
                        <button type="submit" style={this.buttonStyle}><Search alt="Search logo" style={this.searchIcon} /></button>
                    </form>
                    <IconButton style={this.iconButtonStyle}><VideoCall style={this.iconStyle}/></IconButton>
                    <IconButton style={this.iconButtonStyle}><Apps style={this.iconStyle}/></IconButton>
                    <IconButton style={this.iconButtonStyle}><MoreVert style={this.iconStyle}/></IconButton>
                    <Button><span style={this.signInStyle}>SIGN IN</span></Button>
                </div>
                <Hidden lgUp>
                    <Drawer open={this.state.sideListOpen} onClose={this.toggleDrawer}>
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
                        {sideList} {/* Maybe have separate sidelist navs for permamnent and temporary */}
                    </Drawer>
                </Hidden>
                <Drawer open={this.state.watchSideList} onClose={this.closeWatchSideList}>
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
