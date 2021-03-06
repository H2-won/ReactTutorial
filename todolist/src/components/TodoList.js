import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="리액트 공부하기" done={true} />
      <TodoItem text="프로바이더 웹 만들기" done={true} />
      <TodoItem text="Context 만들기" done={true} />
      <TodoItem text="기능 구현하기" done={true} />
    </TodoListBlock>
  );
}

export default TodoList;
