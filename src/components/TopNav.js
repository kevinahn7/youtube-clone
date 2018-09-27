import React from 'react'
import { Link } from 'react-router-dom';

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
    width: "40%",
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
    width: "80%",
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
    border: "none",
    backgroundColor: "#f8f8f8",
    border: "lightgray 1px solid"
}

const linkStyle = {
    color: "#2793e6"
}

const TopNav = () => {
  return (
    <div style={TopNavStyle}>
      <img style={imageStyle} src="https://mbtskoudsalg.com/images/like-png-youtube-2.png" />
      <div style={searchForm}>
        <input type="text" style={inputStyle} placeholder="Search"/>
        <Link to="/results"><button style={buttonStyle}><img src="https://cdn0.iconfinder.com/data/icons/education-volume-1-3/48/14-512.png" style={searchIcon} /></button></Link>
      </div>
      <a style={linkStyle}><p>Sign In</p></a>
    </div>
  )
}

export default TopNav;
