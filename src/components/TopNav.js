import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from './../actions';

const TopNavStyle = {
    height: "55px",
    borderBottom: "1px solid lightgray",
    padding:"0 16px",
    display: "flex",
    alignItems: "center"
}

const imageStyle = {
    height: "40px"
}

const searchForm = {
    width: "53%",
    margin: " 0 auto",
    display: "flex",
    alignItems: "center"
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
    paddingLeft: "8px"
}

const buttonStyle = {
    boxSizing: "content-box",
    height: "27px",
    width: "51px",
    backgroundColor: "#f8f8f8",
    border: "lightgray 1px solid"
}

const linkStyle = {
    color: "#2793e6"
}

const TopNav = ({props, dispatch }) => {

  const handleSearch = (event) => {
    event.preventDefault();
    props.history.push('/results');
    const searchQuery = event.target.elements.searchBar.value.trim();
    event.target.elements.searchBar.value = "";
    dispatch(fetchSearchResult(searchQuery));
    console.log(searchQuery);
  }

  return (
    <div style={TopNavStyle}>
      <img style={imageStyle} src="https://mbtskoudsalg.com/images/like-png-youtube-2.png" alt="The YoutTUbe logo"/>
      <form style={searchForm} onSubmit={handleSearch}>
        <input name="searchBar" type="text" style={inputStyle} placeholder="Search"/>
        <button type="submit" style={buttonStyle}><img src="https://cdn0.iconfinder.com/data/icons/education-volume-1-3/48/14-512.png" alt="Search logo" style={searchIcon} /></button>
      </form>
      <a style={linkStyle}><p>Sign In</p></a>
    </div>
  )
}

export default withRouter(connect()(TopNav));
