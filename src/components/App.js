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
					<TopNav/>
					<div style={topMargin}></div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/watch' component={Watch} />
						{ this.props.searchResults && 
							<Route exact path='/results' render={()=><Results searchResults={this.props.searchResults} />} />
						}
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

const mapStateToProps = state => {
		return {
			searchResults: state.currentSearch.searchResults
		};
	}

export default connect(mapStateToProps)(App);
