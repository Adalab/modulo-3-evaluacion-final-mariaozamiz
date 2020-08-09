import React from 'react';
import dead from '../images/skull-solid.svg';
import alive from '../images/heartbeat-solid.svg';
import unknown from '../images/question-circle-solid.svg';
import human from '../images/user-circle-solid.svg';
import alien from '../images/reddit-alien-brands.svg';
import '../stylesheets/layout/icons.scss';

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
        <>
            <img
                className="modal__content-image"
                alt={`${props.species}'s pic`}
                src={speciesIcon()}
            ></img>
            <img
                className="modal__content-image"
                alt={`${props.status}'s pic`}
                src={statusIcon()}
            ></img>
        </>
    );
}

export default Icons;
