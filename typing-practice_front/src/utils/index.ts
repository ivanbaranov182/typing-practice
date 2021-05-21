import React from 'react';

export const formElementChange = <T>(
  {
    target: { name, type, value, checked }
  }: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<T>>,
  data: T
) =>
  setFormData({
    ...data,
    [name]: type === 'checkbox' ? checked : value
  });

const firstZero = (d: number): string => `${d < 10 ? 0 : ''}${d}`;

export const dateFormatter = (d: Date) => {
  const date = d;

  const toDate = (): string =>
    `${firstZero(date.getDate())}.${firstZero(
      date.getMonth() + 1
    )}.${date.getFullYear()}`;

  const toTime = (): string =>
    `${firstZero(date.getHours())}.${firstZero(
      date.getMinutes()
    )}.${date.getSeconds()}`;

  const toDateTime = (): string => `${toDate()} ${toTime()}`;

  return {
    toDate,
    toTime,
    toDateTime
  };
};
