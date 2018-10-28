import React from 'react';
import Home from './Home';
import TopNav from './TopNav';
import Results from './Results';
import Watch from './Watch';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			sideListPadding: ''
		}
		this.getPadding = this.getPadding.bind(this);
	}

	getPadding(amount) {
		this.setState({sideListPadding: amount})
	}

	render() {
		const topMargin = {
			height: "55px"
		}

		const content = {
			paddingLeft: this.state.sideListPadding
		}

		return (
			<BrowserRouter>
				<div>
					<TopNav getPadding={this.getPadding} sideListPadding={this.state.sideListPadding}/>
					<div style={topMargin}></div> 
					<div style={content}>
						<Switch>
							<Route exact path='/' component={Home} />
							{ this.props.currentVideo &&
								<Route exact path='/watch/:videoId' render={()=><Watch currentVideo={this.props.currentVideo} channelInfo={this.props.channelInfo} currentVideoComments={this.props.currentVideoComments}/>} />
							}
							{ this.props.currentSearch &&
								<Route exact path='/results/:searchQuery' render={()=><Results currentSearch={this.props.currentSearch} />}  rel="stylesheet" href="/style.css"/>
							}
						</Switch>
					</div>
					
				</div>
			</BrowserRouter>

		);
	}
}

const mapStateToProps = state => {
		return {
			currentSearch: state.currentSearch,
			currentVideo: state.currentVideo.currentVideo,
			channelInfo: state.currentVideo.channelInfo,
			currentVideoComments: state.currentVideo.comments
		};
	}

export default connect(mapStateToProps)(App);
