import React from 'react';
import dead from '../../images/skull-solid.svg';
import alive from '../../images/heartbeat-solid.svg';
import unknown from '../../images/question-circle-solid.svg';
import human from '../../images/user-circle-solid.svg';
import alien from '../../images/reddit-alien-brands.svg';
import './iconsContainer.scss';

function Icons(props) {
    const statusIcon = () => {
        if (props.status === 'Dead') {
            return dead;
        } else if (props.status === 'Alive') {
            return alive;
        } else {
            return unknown;
        }
    };

    const speciesIcon = () => {
        return props.species === 'Human' ? human : alien;
    };
    return (
        <div className="icons__nav">
            <img
                className="icons__nav-status"
                alt={`${props.status}'s pic`}
                src={statusIcon()}
            ></img>
            <img
                className="icons__nav-species"
                alt={`${props.species}'s pic`}
                src={speciesIcon()}
            ></img>
        </div>
    );
}

export default Icons;
