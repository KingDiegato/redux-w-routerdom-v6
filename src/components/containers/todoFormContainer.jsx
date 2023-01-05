import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import TodoForms from '../pure/todoForms'

const mapStateToProps = (state) => ({ /* unused */})

const mapDispatchToProps = (dispatch) => { 
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForms)

export default TodoFormContainer