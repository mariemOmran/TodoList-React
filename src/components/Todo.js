
function Todo({ todo ,todos ,setTodos}) { 
    const completeHandler = () => { 
        setTodos(todos.map(item => { 
            if (item.id === todo.id) {
                return { ...item, completed: !todo.completed }
            } else { 
                return item
            }
        }))
    }
    const deletHandler = () => { 
        setTodos(todos.filter(item => item.id !== todo.id));
    }
    return (
    <div className="todo">
            <li className={`todo-item ${todo.completed? "completed":''}`}>{todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deletHandler}>
                <i className="fas fa-trash"></i>
            </button>
    </div>
    );
}
export default Todo;