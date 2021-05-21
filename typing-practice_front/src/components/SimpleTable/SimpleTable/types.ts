import { Entity } from 'src/types';

export type Order = 'asc' | 'desc';

export interface HeadCell<T> {
  disablePadding: boolean;
  id: keyof T;
  label: string;
  numeric: boolean;
  getCellValue?: (row: T) => any;
}

export interface SimpleTableProps<T extends Entity> {
  headCells: HeadCell<T>[];
  rows: T[];
  title: string;
  addButtonClick?: () => void;
  deleteButtonClick?: () => void;
  editLink?: string;
}
