import React from 'react'
import Filter from './filter.jsx'
import AddTodo from '../containers/addtodo.jsx'
import VisibleTodoList from '../containers/visibletodolist.jsx'
import { getTodos } from '../actions/index.jsx'
import { connect } from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props)
        //this.handlers = createHandlers(this.props.dispatch);
        // binders
    }

    componentDidMount() {
        this.props.dispatch(getTodos())
    }

    render() {
        return (
            <div>
              <AddTodo />
              <Filter />
              <VisibleTodoList />
            </div>
        );
    }
}

export default connect()(App);
