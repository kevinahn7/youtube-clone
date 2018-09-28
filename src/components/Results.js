import React from 'react';
import Thumbnail from './Thumbnail';
import PropTypes from 'prop-types';

function Results(props){

	function logIndex(index) {
		console.log(index)
	}

  return (
    <div>
      <hr/>
      {Object.keys(props.searchResults).map(function(index) {
        return <p key={index} onClick={() => logIndex(index)}>{props.searchResults[index].snippet.title}</p>
      })}
    </div>
  );
}

Results.propTypes = {
  searchResults: PropTypes.array
};

export default Results;