import React from 'react';
import FilterName from './FilterByName';
import '../stylesheets/filter.scss';

function Filters(props) {
    const handleChange = (ev) => {
        console.log(`se recoge del input: ${ev.target.value}`);
        props.handleFilter({
            kind: 'name',
            value: ev.target.value,
        });
    };

    return (
        <form className="form">
            <FilterName handleChange={handleChange} />
        </form>
    );
}

export default Filters;
