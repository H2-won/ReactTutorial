import React from 'react';
import PostContainer from '../containers/PostContainer';

function PostPage({ match }) {
  const { id } = match.params;
  // url parameter는 문자열이니까 숫자로 바꿔줌
  const postId = parseInt(id, 10);

  return <PostContainer postId={postId} />;
}

export default PostPage;
