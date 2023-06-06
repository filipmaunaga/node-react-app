import React, { useEffect } from 'react';
import SinglePost from '../components/SinglePost';
import { handlePlusOne, handleMinusOne, deletePost } from '../services/PostServices';
import usePosts from '../hooks/usePosts';
import { IUser, useAuthStore } from '../store/auth/useAuthStore';

const Posts = (): JSX.Element => {
  const user = useAuthStore((state) => state.user);
  const [data, setData, getData] = usePosts(user as IUser);

  useEffect(() => {
    if (!user) return;
    getData();
  }, [user]);

  const handleDelete = async (postId: string) => {
    if (!user) return;
    await deletePost(postId);
    getData();
  };

  return (
    <div>
      {!data ? (
        <p>"Loading..."</p>
      ) : (
        data.map((post) => (
          <SinglePost
            key={post._id}
            post={{
              id: post._id,
              title: post.postTitle,
              content: post.postBody,
              numberOfLikes: post.numberOfLikes,
              date: post.postDate,
            }}
            handlePlusOne={handlePlusOne}
            handleMinusOne={handleMinusOne}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
