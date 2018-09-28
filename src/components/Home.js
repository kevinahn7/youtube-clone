import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {


	render() {
		return (
			<div>
				<Link to="/watch">Watch</Link>
			</div>
		);
	}
}

export default Home;
