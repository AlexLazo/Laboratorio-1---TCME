import { useState, useEffect } from "react";
import { AiOutlineDelete } from 'react-icons/ai';

const Controlado = () => {
    const [allTodos, setAllTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newDescripcion, setNewDescription] = useState('');
    const [newState, setNewState] = useState('');
    const [isCompletedScreen] = useState(false);


    // Formulario controlado
    const handleAddNewToDo = () => {
        let newToDoObj = {
            title: newTodoTitle,
            description: newDescripcion,
            state: newState,

        };

        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newToDoObj);
        setAllTodos(updatedTodoArr);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
        setNewDescription('');
        setNewTodoTitle('');
        setNewState('');
    };


    useEffect(() => {
        let savedTodos = JSON.parse(localStorage.getItem('todolist'));
        if (savedTodos) {
            setAllTodos(savedTodos);
        }

    }, []);

    const handleToDoDelete = index => {
        let reducedTodos = [...allTodos];
        reducedTodos.splice(index);
        localStorage.setItem('todolist', JSON.stringify(reducedTodos));
        setAllTodos(reducedTodos);
    };




    return (
        <div className="App">
            <h1>Mis pendientes</h1>
            <div className="todo-wrapper">
                <h2 className="text-info">To Do List</h2>
                <div className="todo-input">

                    <div className="todo-input-item">
                        <input
                            className="form-control mb-3"
                            type="text"
                            placeholder="Cuál es el título de tu To Do?"
                            value={newTodoTitle}
                            onChange={e => setNewTodoTitle(e.target.value)}
                        />
                    </div>

                    <div className="todo-input-item">
                        <textarea
                            className="form-control mb-2"
                            type="text"
                            placeholder="Ingrese la descripción..."
                            value={newDescripcion}
                            onChange={e => setNewDescription(e.target.value)}
                        />
                    </div>

                    <div className="todo-input-item">
                        <select

                            className="form-select mb-2"
                            value={newState}
                            onChange={e => setNewState(e.target.value)}
                            defaultValue={newState}
                        >
                            <option value="Pendiente">Pendiente</option>
                            <option value="Completado">Completado</option>
                        </select>
                    </div>

                
                    <div className="todo-input-item">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleAddNewToDo}
                        >
                            Agregar
                        </button>
                    </div>
                </div>

                <div className="todo-list">
                    {isCompletedScreen === false &&
                        allTodos.map((item, index) => (
                            <div className="todo-list-item" key={index}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <h6>{item.state}</h6>

                                </div>
                                <div>
                                    <AiOutlineDelete
                                        title="Delete?"
                                        className="icon"
                                        onClick={() => handleToDoDelete(index)}
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Controlado;