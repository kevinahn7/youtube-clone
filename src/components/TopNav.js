import React from 'react'
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

class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
      tempLeft: false
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
        zIndex: "4"
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

    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };

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
            if (pathName.substring(1,8) === "results") {
              this.props.dispatch(fetchSearchResult(pathName.slice(9, pathName.length)));
            }
        }
    }

    render() {
        const sideList = (
          <div style={this.sideListStyle}>
            hello
          </div>
        );

        return (
            <div style={this.TopNavStyle}>
                <IconButton onClick={this.toggleDrawer('tempLeft', true)} style={this.sideListButtonStyle}><Menu /></IconButton>
                <Drawer open={this.state.tempLeft} onClose={this.toggleDrawer('tempLeft', false)}>
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('tempLeft', false)}
                    onKeyDown={this.toggleDrawer('tempLeft', false)}>
                    {sideList}
                  </div>
                </Drawer>
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
        )
    }

}

export default withRouter(connect()(TopNav));
