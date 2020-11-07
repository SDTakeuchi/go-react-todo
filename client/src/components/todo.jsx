import React, { PropTypes } from 'react'

const Todo = ({ onClick, deleteTodo, updateTodo, todo }) => (
    <tr>
        <th
            style={{
                textAlign: "left",
                padding: "20px",
                textDecoration: todo.completed? 'line-through': 'none'
            }}
            onClick={onClick}>{todo.title}</th>

        <td style={{width: "70px"}}>
            <button
                style={{
                    textDecoration: todo.completed? 'line-through': 'none'
                }}
                onClick={e => {
                    e.preventDefault()
                    todo.completed = !todo.completed
                    updateTodo()
                }}>完了
            </button>
        </td>

        <td style={{width: "70px"}}>
            <button
                onClick={e => {
                    e.preventDefault()
                    deleteTodo()
                }}>削除</button>
        </td>
    </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
}

export default Todo
