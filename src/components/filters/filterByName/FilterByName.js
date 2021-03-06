import React from 'react';
import './filterByName.scss';

function FilterByName(props) {
    return (
        <div className="text-imput">
            <label className="text-input__label" htmlFor="search-input">
                Find a character!
                <input
                    className="text-input__field"
                    id="search-input"
                    name="search-input"
                    type="text"
                    placeholder="for example, 'Rick'"
                    onKeyUp={props.handleChange}
                    onKeyPress={props.handleKeyPress}
                    defaultValue={props.filterName}
                ></input>
            </label>
        </div>
    );
}

export default FilterByName;
