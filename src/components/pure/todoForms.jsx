import React from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForms = ({submit}) => {

    const newText = useRef()
    return (
        <div>
            <h2> Create and save a ToDo </h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input ref={newText} type='text' placeholder='Name of the Task'/>
                <button type='submit'>
                    Create ToDo
                </button>
            </form>
            
        </div>
    );
}

TodoForms.propTypes = {
    submit: PropTypes.func.isRequired
}



export default TodoForms;
