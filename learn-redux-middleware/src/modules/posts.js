import * as postsAPI from '../api/posts';

// ducks 패턴 제대로 따를라면 'posts/GET_POSTS' 로 하는게 맞다

const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 에러

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => async (dispatch) => {
  // 요청 시작
  dispatch({ type: GET_POSTS });
  // API 호출
  try {
    const posts = await postsAPI.getPosts();
    // 성공
    dispatch({
      type: GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    // 실패
    dispatch({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  // 요청 시작
  dispatch({ type: GET_POST });
  // API 호출
  try {
    const post = await postsAPI.getPost(id);
    // 성공
    dispatch({
      type: GET_POST_SUCCESS,
      post,
    });
  } catch (e) {
    // 실패
    dispatch({
      type: GET_POST_ERROR,
      error: e,
    });
  }
};
