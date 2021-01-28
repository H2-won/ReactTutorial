import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onCreate = ()=>{
    const user={
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email:'',
    });
    console.log(nextId.current);
    nextId.current +=1;
  };

  const onRemove = id =>{
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id =>{
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active}
        : user
      ));
  };

  const [users, setUsers] = useState([
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
    }
  ]);

  const nextId = useRef(4);



  return (
    <>
      <CreateUser
        username={username}
        email ={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove = {onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;