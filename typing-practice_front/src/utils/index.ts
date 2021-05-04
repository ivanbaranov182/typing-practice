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
