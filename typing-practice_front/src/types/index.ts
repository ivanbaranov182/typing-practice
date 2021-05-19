export interface Entity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type ValueOf<T> = T[keyof T];
