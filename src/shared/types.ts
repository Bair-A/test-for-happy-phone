export type TodoItemType = {
  id: number;
  text: string;
  position: number;
  category: string;
};

export type LocalStorageValue<T> = Array<T>;
