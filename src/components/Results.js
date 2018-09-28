import React from 'react';
import Thumbnail from './Thumbnail';
import { connect } from 'react-redux';

class Results extends React.Component {
	render() {
		const { searchResults } = this.props;

		const show = () => {
		console.log(searchResults)
		}

		return (
		<div>
			<p onClick={show}>hello</p>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    searchResults: state.currentSearch.searchResults
  };
}

export default connect(mapStateToProps)(Results);
