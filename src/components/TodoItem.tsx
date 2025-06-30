'use client';

import { TodoItemType } from '@/shared/types';

type TodoItemProps = { todo: TodoItemType };

const TodoItem = ({ todo }: TodoItemProps) => {
  const { text, category } = todo;
  return (
    <div className="mb-4 rounded bg-white p-4 shadow transition-shadow duration-300 hover:shadow-lg">
      <p className="text-lg font-semibold text-gray-800">{text}</p>
      <p className="mt-1 text-sm text-gray-500">{category[0]}</p>
    </div>
  );
};

export default TodoItem;
