'use client';

import { useCallback, useEffect, useState } from 'react';
import TodoItem from '@/components/TodoItem';
import {
  CategoryLastPosition,
  CategoryType,
  TodoItemType,
} from '@/shared/types';
import Button from '@/components/Button';
import CreateTaskModal from '@/components/CreateTaskModal';
import { getInitialValues } from '@/utils/utils';
import { TODOS_KEY } from '@/constants/constants';

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [showCreateTodoModal, setShowCreateTodoModal] = useState(false);
  const [latestTaskId, setLatestTaskId] = useState(0);
  const [categories, setCategories] = useState<CategoryType['name'][]>([]);
  const [categoryLastPositions, setCategoryLastPositions] =
    useState<CategoryLastPosition>({});

  const createTask = useCallback(
    (task: Omit<TodoItemType, 'id' | 'createdAt'>) => {
      const updatedTodoList = [
        ...todoList,
        { ...task, id: latestTaskId + 1, createdAt: new Date() },
      ];
      setTodoList(updatedTodoList);
      localStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodoList));
    },
    [todoList, latestTaskId]
  );

  useEffect(() => {
    const { todoList, latestId, categories, categoryLastPositions } =
      getInitialValues();

    setLatestTaskId(latestId);
    setCategories(categories as CategoryType['name'][]);
    setTodoList(todoList);
    setCategoryLastPositions(categoryLastPositions);

    console.log('ЗАДАЧИ', todoList);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {showCreateTodoModal && (
        <CreateTaskModal
          categories={categories}
          onCreate={createTask}
          closeModal={() => {
            setShowCreateTodoModal(false);
          }}
          categoryLastPositions={categoryLastPositions}
        />
      )}

      <h1 className="mb-4 text-2xl font-bold">Todo List</h1>
      <div className="flex justify-center gap-2">
        <Button
          text={'Создать задачу'}
          onClick={() => {
            setShowCreateTodoModal(true);
          }}
        />
      </div>
      {todoList.length > 0 &&
        todoList.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </div>
  );
};

export default Todo;
