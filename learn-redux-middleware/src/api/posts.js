const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
// sleep(1000).then(() => console.log('1초 뒤 실행'));

const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어 배우기',
    body: '리덕스 미들웨어 Promise 예시',
  },

  {
    id: 2,
    title: 'redux-thunk 배우기',
    body: 'redux-thunk 사용해서 비동기 작업 처리해보자',
  },

  {
    id: 3,
    title: 'redux-saga 배우기',
    body: 'redux-saga로 비동기 작업 하는 것도 배울 것이다.',
  },
];

// getPosts 실행하면 Promise 하나 만들어지고, 0.5초 흐르고 posts 반환한다.
export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
