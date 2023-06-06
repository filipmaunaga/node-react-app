import { useState } from 'react';
import axios from 'axios';
import { IUser } from '../store/auth/useAuthStore';

const usePosts = (user: IUser) => {
  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    const res = await axios.get('/posts', {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setData(res.data);
  };

  return [data, setData, getData] as const;
};

export default usePosts;
