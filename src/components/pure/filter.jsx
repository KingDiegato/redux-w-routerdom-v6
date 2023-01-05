import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({active, onClick, children}) => {

    if(active){
        return (
            <button
            className='filter'
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            disabled
        >
            {children}
        </button>
        )
    }

    return (
        <button
            className='filter'
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};


export default Filter;