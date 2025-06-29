import { TodoItemType } from '@/shared/types';

export const TODOS_KEY = 'TODOS';

export const mockTodoItems: TodoItemType[] = [
  {
    id: 1,
    text: 'Купить продукты',
    position: 1,
    category: 'Покупки',
  },
  {
    id: 2,
    text: 'Прочитать книгу',
    position: 2,
    category: 'Чтение',
  },
  {
    id: 3,
    text: 'Позвонить другу',
    position: 3,
    category: 'Общение',
  },
  {
    id: 4,
    text: 'Сделать зарядку',
    position: 4,
    category: 'Здоровье',
  },
];
