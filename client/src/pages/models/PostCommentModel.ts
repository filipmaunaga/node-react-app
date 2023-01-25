export interface IPostSingleComment {
  commentContent: string;
  commentNumberOfLikes: number;
  date: string;
}
export interface IPostComment {
  singleComment: IPostSingleComment;
  commentUpVote?: (
    postId: string,
    commentId: string,
    data: {
      commentBody: string;
      commentNumberOfLikes: number;
      commentDate: string;
    }
  ) => Promise<void>;
  commentDownVote?: (
    postId: string,
    commentId: string,
    data: {
      commentBody: string;
      commentNumberOfLikes: number;
      commentDate: string;
    }
  ) => Promise<void>;
  postId?: string;
  commentId?: string;
  getComments?: () => Promise<void>;
  getSingleComment?: (postId: string, commentId: string) => Promise<void>;
  deleteComment?: (postId: string, commentId: string) => Promise<void>;
}
