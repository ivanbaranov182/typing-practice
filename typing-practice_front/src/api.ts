import axios from 'axios';

export const fetchUser = async (token: string) => {
  const userData = await axios.get(`/users/${token}`).then((res) => res.data);
  return userData.json();
};
