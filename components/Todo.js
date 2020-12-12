/** @format */

import React from 'react';
import { TodosContext, TodosProvider } from '../contexts/TodosContext';
import { useContext } from 'react';

export default function Todo({ todo }) {
  const { updateTodo, deleteTodo } = useContext(TodosContext);
  const handleToggleCompleted = () => {
    const updatedFields = {
      ...todo.fields,
      completed: !todo.fields.completed,
    };
    const updatedTodo = { id: todo.id, fields: updatedFields };
    updateTodo(updatedTodo);
  };

  return (
    <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4">
      <input type="checkbox" name="completed" id="completed" checked={todo.fields.completed} className="mr-2 h-5 w-5" onChange={handleToggleCompleted} />
      <p className={`flex-1 text-gray-800 ${todo.fields.completed && 'line-through'}`}>{todo.fields.description}</p>
      {/* <p>{todo.fields.nickname}</p> */}
      <button type="button" className="text-sm text-white bg-red-500 hover:bg-red-400 py-2 px-4 rounded-md" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}
