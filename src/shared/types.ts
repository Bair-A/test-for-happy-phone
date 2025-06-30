export type categoryTuple = [string, number];

export type TodoItemType = {
  id: number;
  text: string;
  category: categoryTuple;
  createdAt: Date;
};

export type CategoryLastPosition = {
  [category: string]: number;
};

export type LocalStorageValue<T> = Array<T>;

export enum ButtonColor {
  Blue = 'bg-blue-500',
  Green = 'bg-green-500',
  Red = 'bg-red-500',
}

export enum ButtonHoverColor {
  Blue = 'bg-blue-600',
  Green = 'bg-green-600',
  Red = 'bg-red-600',
}
