'use client';

import { TODOS_KEY } from '@/constants/constants';
import { useEffect, useState } from 'react';
import TodoItem from '@/components/TodoItem';
import { TodoItemType } from '@/shared/types';

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  useEffect(() => {
    const storageValue = localStorage.getItem(TODOS_KEY);
    const parsedValue = storageValue ? JSON.parse(storageValue) : [];
    setTodoList(parsedValue);
    console.log('ЗАДАЧИ', parsedValue);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">Todo List</h1>
      {todoList.length > 0 &&
        todoList.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </div>
  );
};

export default Todo;
