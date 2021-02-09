import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    // console.log('user값 설정됨')
    // console.log(user);
    // 마운트 될때라고 한다 ( 컴포넌트가 나타날 때를 말함 )
    // props로 받은 값을 -> state 설정하는 것
    // rest api 같은 api 요청할때
    // 라이브러리 사용할때 (d3, video.js 등)
    // setInterval, setTimeout 등의 작업도 설정할 수 있다.
    return () => {
      // console.log('user값 바뀌기 전');
      // console.log(user);
      // 언마운트 ( 컴포넌트 사라질때를 말함 )
      // clearInterval, clearTimeout 등의 작업
      // 라이브러리 인스턴스를 제거하는 작업
      // 일종의 뒷정리하는 함수라고 이해하면 된다.
    };
  }, [user]);

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users,
);
