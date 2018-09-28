import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from './../actions';

const TopNavStyle = {
    height: "55px",
    padding:"0 16px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0 1px #eee"
}

const imageStyle = {
    height: "40px",
    marginTop: "7px",
    marginLeft: "10px"
}

const searchForm = {
    width: "53%",
    margin: " 0 auto",
    display: "flex",
    justifyContent: "center"
}

const searchIcon = {
    height: "15px",
    paddingTop: "2px",
    opacity: "0.5"
}

const inputStyle = {
    height: "30px",
    width: "100%",
    maxWidth: "575px",
    padding: "0",
    border: "lightgray 1px solid",
    borderRight: "none",
    fontSize: "16px",
    paddingLeft: "9px"
}

const buttonStyle = {
    boxSizing: "content-box",
    height: "28px",
    width: "51px",
    backgroundColor: "#f8f8f8",
    border: "lightgray 1px solid",
    cursor: "pointer"
}

const linkStyle = {
    color: "#2793e6"
}

const TopNav = ({history, dispatch}) => {
    const handleSearch = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.searchBar.value.trim();
        if (searchQuery) {
            dispatch(fetchSearchResult(searchQuery));
            history.push('/results');
        }
    }

    return (
        <div style={TopNavStyle}>
            <Link to="/"><img style={imageStyle} src="https://mbtskoudsalg.com/images/like-png-youtube-2.png" alt="The YoutTUbe logo"/></Link>
            <form style={searchForm} onSubmit={handleSearch}>
                <input name="searchBar" type="text" style={inputStyle} placeholder="Search"/>
                <button type="submit" style={buttonStyle}><img src="https://cdn0.iconfinder.com/data/icons/education-volume-1-3/48/14-512.png" alt="Search logo" style={searchIcon} /></button>
            </form>
            <a style={linkStyle}><p>Sign In</p></a>
        </div>
    )
}

export default withRouter(connect()(TopNav));
