import React, { useReducer, useMemo, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import Users from './Users';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'asd',
      email: 'asd@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'zxc',
      email: 'zxc@namver.com',
      active: false,
    },
    {
      id: 3,
      username: 'qwe',
      email: 'qwe@example.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    // return {
    //   inputs: initialState.inputs,
    //   users: state.users.concat(action.user),
    // };
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    // return {
    //   ...state,
    //   users: state.users.map((user) =>
    //     user.id === action.id ? { ...user, active: !user.active } : user,
    //   ),
    // };
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   users: state.users.filter((user) => user.id !== action.id),
    // };
    default:
      throw new Error('Unhandled action');
  }
}

// context 생성
export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
      <Users />
    </UserDispatch.Provider>
  );
}

export default App;
