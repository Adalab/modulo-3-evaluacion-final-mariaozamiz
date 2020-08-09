import React from 'react';
import FilterByName from './FilterByName';
import '../stylesheets/layout/filters.scss';

function Filters(props) {
    const handleChange = (ev) => {
        console.log(`se recoge del input: ${ev.target.value}`);
        props.handleFilter({
            kind: 'name',
            value: ev.target.value,
        });
    };

    const handleKeyPress = (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
        }
    };

    return (
        <form className="form">
            <FilterByName
                handleChange={handleChange}
                handleKeyPress={handleKeyPress}
            />
        </form>
    );
}

export default Filters;
