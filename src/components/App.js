import React from 'react';
import Home from './Home';
import TopNav from './TopNav';
import Results from './Results';
import Watch from './Watch';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {

	render() {
		return (
			<div>
				<TopNav/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/results' render={()=><Results searchResults={this.props.searchResults} />} />
					<Route exact path='/watch' component={Watch} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => {
		return {
			searchResults: state.currentSearch.searchResults
		};
	}

export default connect(mapStateToProps)(App);
