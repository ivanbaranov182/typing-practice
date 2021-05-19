export type Order = 'asc' | 'desc';

export interface HeadCell<T> {
  disablePadding: boolean;
  id: keyof T;
  label: string;
  numeric: boolean;
}

export interface AdminTableProps<T> {
  headCells: HeadCell<T>[];
  rows: T[];
}
