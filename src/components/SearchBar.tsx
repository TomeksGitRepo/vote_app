import React from 'react';
import { connect } from 'react-redux';
import { useSearchInput } from '../hooks/search-input-hook';
// import { searchQuery } from '../actions';

  function SearchBar(props: any) {
     const { value, eventHandler, clear } = useSearchInput("");

     const processSearch = (query: string) => {
          props.searchQuery(query);
     }

    return (
      <div className='row'>
        <input placeholder="Search by description" type="text" {...eventHandler} />
        <button onClick={() => processSearch(value)}>Search</button>
      </div>
    );
}

export default connect(null, {})(SearchBar);

