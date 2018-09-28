import React from 'react';
import Thumbnail from './Thumbnail';
import PropTypes from 'prop-types';

function Results(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.searchResults).map(function(index) {
        return <p key={index}>{props.searchResults[index].snippet.title}</p>
      })}
    </div>
  );
}

Results.propTypes = {
  searchResults: PropTypes.array
};

export default Results;