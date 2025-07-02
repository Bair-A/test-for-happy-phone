import { TodoItemType } from '@/shared/types';

export const TODOS_KEY = 'TODOS';

export const DEFAULT_CATEGORY = { name: 'Без категории', id: 1 };

const baseDate = new Date();

export const NAVIGATION_LINKS = [
  { text: 'Главная', href: '/' },
  { text: 'Категории', href: '/categories' },
];

export const mockTodoItems: TodoItemType[] = [
  {
    id: 1,
    text: 'Купить продукты',
    category: ['Покупки', 1],
    createdAt: new Date(baseDate.getTime()),
  },
  {
    id: 2,
    text: 'Прочитать книгу',
    category: ['Чтение', 1],
    createdAt: new Date(baseDate.getTime() + 60000),
  },
  {
    id: 3,
    text: 'Позвонить другу',
    category: ['Общение', 1],
    createdAt: new Date(baseDate.getTime() + 2 * 60000),
  },
  {
    id: 4,
    text: 'Сделать зарядку',
    category: ['Здоровье', 1],
    createdAt: new Date(baseDate.getTime() + 3 * 60000),
  },
];

export const mockCategories = [
  { value: 'Покупки', label: 'Покупки' },
  { value: 'Чтение', label: 'Чтение' },
  { value: 'Общение', label: 'Общение' },
  { value: 'Здоровье', label: 'Здоровье' },
];
