import React from 'react';
import Home from './Home';
import TopNav from './TopNav';
import Results from './Results';
import Watch from './Watch';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {

	render() {
		const topMargin = {
			height: "55px"
		}
		return (
			<BrowserRouter>
				<div>
					<TopNav searchResults={this.props.searchResults}/>
					<div style={topMargin}></div>
					<Switch>
						<Route exact path='/' component={Home} />
						{ this.props.currentVideo &&
							<Route exact path='/watch/:videoId' render={()=><Watch currentVideo={this.props.currentVideo} />} />
						}
						{ this.props.searchResults && 
							<Route path='/results/:searchQuery' render={()=><Results searchResults={this.props.searchResults} />}  rel="stylesheet" href="/style.css"/>
						}
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

const mapStateToProps = state => {
		return {
			searchResults: state.currentSearch.searchResults,
			currentVideo: state.currentVideo.currentVideo
		};
	}

export default connect(mapStateToProps)(App);
