import React from 'react';
import '../stylesheets/filterByName.scss';

function FilterByName(props) {
    return (
        <label htmlFor="search-input">
            Find a character!
            <input
                id="search-input"
                name="search-input"
                type="text"
                placeholder="for example, 'Rick'"
                onKeyUp={props.handleChange}
                onKeyPress={props.handleKeyPress}
            ></input>
        </label>
    );
}

export default FilterByName;
