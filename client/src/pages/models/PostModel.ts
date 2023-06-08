import { IUser } from '../../store/auth/useAuthStore';

export interface IPost {
  id?: string;
  title: string;
  content: string;
  numberOfLikes: number;
  date: string;
}

export interface ISinglePost {
  post: IPost;
  handlePlusOne?: (
    postId: string,
    user: IUser,
    data: {
      numberOfLikes: number;
    }
  ) => Promise<void>;
  handleMinusOne?: (
    postId: string,
    user: IUser,
    data: {
      numberOfLikes: number;
    }
  ) => Promise<void>;
  handleDelete?: (postId: string) => void;
  user: IUser;
}
