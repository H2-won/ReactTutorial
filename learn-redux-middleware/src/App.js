import React from 'react';
import { Route } from 'react-router-dom';
import PostListContainer from './containers/PostListContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Route path="/" component={PostListPage} exact />
      <PostListContainer />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
