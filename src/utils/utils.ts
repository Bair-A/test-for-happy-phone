import {
  ButtonColor,
  CategoryLastPosition,
  categoryTuple,
  TodoItemType,
} from '@/shared/types';
import { TODOS_KEY } from '@/constants/constants';

export const getHoverColor = (color: ButtonColor): string => {
  switch (color) {
    case 'bg-blue-500':
      return 'bg-blue-600';
    case 'bg-green-500':
      return 'bg-green-600';
    case 'bg-red-500':
      return 'bg-red-600';
    default:
      return 'bg-gray-600';
  }
};

export const getLatestId = (todoList: TodoItemType[]) => {
  if (todoList.length === 0) {
    return 0;
  }

  return Math.max(...todoList.map((todo) => todo.id));
};

export const getCategoryLastPosition = (
  todoList: TodoItemType[]
): CategoryLastPosition => {
  return todoList.reduce((acc, todo) => {
    const categoryName = todo.category[0];
    acc[categoryName] = Math.max(acc[categoryName] || 0, todo.category[1]);
    return acc;
  }, {} as CategoryLastPosition);
};

export const getInitialValues = () => {
  const storageValue = localStorage.getItem(TODOS_KEY);
  const parsedValue = storageValue ? JSON.parse(storageValue) : [];

  if (parsedValue.length === 0) {
    return {
      todoList: [],
      latestId: 0,
      categories: [],
      categoryLastPositions: {} as CategoryLastPosition,
    };
  }

  const categoryLastPositions: CategoryLastPosition =
    getCategoryLastPosition(parsedValue);

  const latestId = getLatestId(parsedValue);
  const allCategories = parsedValue.map((todo: TodoItemType) => todo.category);
  const uniqueCategories = Array.from(
    new Set(allCategories.map((cat: categoryTuple) => cat[0]))
  );

  return {
    todoList: parsedValue,
    latestId,
    categories: uniqueCategories,
    categoryLastPositions,
  };
};
