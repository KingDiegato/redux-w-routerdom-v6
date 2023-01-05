import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';
import TodoFormContainer from '../containers/todoFormContainer';
import FilterOption from './filterOption';

const TodoList = ({todos, onTodoClick }) => {
    return (
        <div>
            <h1>
                Your TODOS
            </h1>
            <ul style={{
                display: 'grid',
                width: '30rem',
                height: '20rem',
                alignContent: 'flex-start',
                overflow: 'hidden',
                overflowY: 'auto',
            }}>
                {todos.map((todo, index) => (
                    
                        <Todo key={index} {...todo}
                        onClick={() => onTodoClick(todo.id)}
                        ></Todo>
                    
                ))}
            </ul>
            <TodoFormContainer></TodoFormContainer>
            <FilterOption></FilterOption>
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        )
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}
export default TodoList;