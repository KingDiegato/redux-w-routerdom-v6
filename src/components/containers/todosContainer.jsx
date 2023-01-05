import { connect } from 'react-redux'
import TodoList from '../pure/todoList'
import {toggleTodo} from '../../store/actions/actions'

const filterTodos = (todo, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todo;
        case 'SHOW_ACTIVE':
            return todo.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todo.filter((todo) => todo.completed);
        
        default:
            break;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos( state.todosState, state.filterState )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodosContainer