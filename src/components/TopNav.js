import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from './../actions';
import youtubeLogo from '../assets/youtube-logo.png';
import Search from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class TopNav extends React.Component {
    constructor(props) {
        super(props)
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

    imageStyle = {
        height: "40px",
        marginTop: "7px",
        marginLeft: "10px"
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
        opacity: "0.5"
    }

    inputStyle = {
        height: "32px",
        width: "100%",
        maxWidth: "575px",
        padding: "0",
        border: "lightgray 1px solid",
        borderRight: "none",
        fontSize: "16px",
        paddingLeft: "9px",
        boxSizing: "border-box"
    }

    buttonStyle = {
        boxSizing: "content-box",
        height: "32px",
        width: "70px",
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
        fontWeight: "600",
        color: "#2793e6",
        marginLeft: "4px"
    }

    handleSearch = (event) => {
        event.preventDefault();
        window.scrollTo(0, 0);
        const searchQuery = event.target.elements.searchBar.value.trim();
        if (searchQuery) {
            this.props.dispatch(fetchSearchResult(searchQuery));
            this.props.history.push('/results/' + searchQuery);
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
        return (
            <div style={this.TopNavStyle}>
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
