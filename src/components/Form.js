
function Form({ inputText, setInputText, setTodos , todos , status, setStatus ,filteredTodos , setFilteredTodos}) {
    const InputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const addTaskHandler = (e) => { 
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.floor(Math.random() * 1000) }]);
        setInputText('');
    }
    const fiterChangeHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return (
    <form>
        <input type="text" className="todo-input" value={inputText} onChange={ InputTextHandler}/>
        <button className="todo-button" type="submit" onClick={addTaskHandler}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
                <select value={ status } name="todos" className="filter-todo" onChange={fiterChangeHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    );
}
export default Form;