import React from 'react'

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
    maxWidth: "600px",
    margin: " 0 auto",
    display: "flex",
    alignItems: "center"

}

const searchIcon = {
    height: "20px"
}

const inputStyle = {
    height: "25px",
    width: "80%",
    maxWidth: "575px"
}

const buttonStyle = {
    boxSizing: "content-box",
    height: "29px",
    width: "51px",
    border: "none"
}

const linkStyle = {
    color: "#2793e6"
}

const TopNav = () => {
  return (
    <div style={TopNavStyle}>
      <img style={imageStyle} src="https://mbtskoudsalg.com/images/like-png-youtube-2.png" />
      <div style={searchForm}>
        <input type="text" style={inputStyle} />
        <button style={buttonStyle}><img src="https://cdn0.iconfinder.com/data/icons/education-volume-1-3/48/14-512.png" style={searchIcon} /></button>
      </div>
      <a style={linkStyle}><p>Sign In</p></a>
    </div>
  )
}

export default TopNav;
