import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearPost, getPost } from '../modules/posts';
import Post from '../components/Post';

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
    // return 부분 클리어 함수는 component가 unmount될때나, postId가 바뀌는 경우 윗 줄의 Effect 함수인 dispatch가 실행되기 전에 실행된다.
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Post post={data} />;
}

export default PostContainer;
