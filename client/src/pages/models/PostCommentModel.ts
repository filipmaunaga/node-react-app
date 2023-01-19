export interface IPostComment {
  commentContent: string;
  commentNumberOfLikes: number;
  date: string;
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
  deleteComment?: (postId: string, commentId: string) => Promise<void>;
}
