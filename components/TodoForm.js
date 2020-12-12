/** @format */

import React, { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

export default function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };
  return (
    <form className="form my-6" onSubmit={handleSubmit}>
      <div className="flex flex-col text-sm mb-2">
        <label htmlFor="todo" className="font-bold mb-2 text-gray-800">
          Todo
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="type some todo"
          className="border border-gray-200 p-2 rounded appearance-none focus:outline-none focus:border-gray-500"
        />
      </div>
      <button type="submit" className="w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
        add todo
      </button>
    </form>
  );
}