'use client';

import Overlay from '@/components/Overlay';
import { useState } from 'react';
import { CategoryLastPosition, TodoItemType } from '@/shared/types';

type CreateTaskModalProps = {
  closeModal: () => void;
  onCreate: (task: Omit<TodoItemType, 'id' | 'createdAt'>) => void;
  categoryLastPositions: CategoryLastPosition;
  categories: string[];
};

const CreateTaskModal = ({
  closeModal,
  onCreate,
  categoryLastPositions,
  categories,
}: CreateTaskModalProps) => {
  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState('empty');

  const createTask = () => {
    onCreate({
      text: taskText,
      category: [category, categoryLastPositions[category] || 1],
    });
    setTaskText('');
    setCategory('empty');
    closeModal();
    console.log(
      {
        text: taskText,
        category: [category, categoryLastPositions[category] || 1],
      },
      'создана задача'
    );
  };

  return (
    <Overlay onClick={closeModal}>
      <div
        className="relative max-h-full w-full max-w-md rounded-lg bg-white shadow-sm dark:bg-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Create New Task
          </h3>
          <button
            type="button"
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="task-modal"
            onClick={closeModal}
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <form
          className="p-4 md:p-5"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.target as HTMLFormElement);
            const taskText = formData.get('task-text') as string;
            const category = formData.get('task-category') as string;
            console.log(taskText, category, 'задачи');
          }}
        >
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label
                htmlFor="task-text"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Текст задачи
              </label>
              <input
                type="text"
                name="task-text"
                id="task-text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="Текст задачи"
                required
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="task-category"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Категория
              </label>
              <select
                id="task-category"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="empty">Без категори</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={createTask}
          >
            <svg
              className="-ms-1 me-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Добавить задачу
          </button>
        </form>
      </div>
    </Overlay>
  );
};

export default CreateTaskModal;
