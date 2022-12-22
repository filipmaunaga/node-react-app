export interface IPost {
  id?: string;
  title: string;
  content: string;
  numberOfLikes: number;
}

export interface ISinglePost {
  post: IPost;
  handlePlusOne?: (
    postId: string,
    data: {
      numberOfLikes: number;
    }
  ) => Promise<void>;
  handleMinusOne?: (
    postId: string,
    data: {
      numberOfLikes: number;
    }
  ) => Promise<void>;
}
