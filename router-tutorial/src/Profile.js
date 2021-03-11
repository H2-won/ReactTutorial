import React from 'react';

const profileDate = {
  velopert: {
    name: '임희원',
    description: 'Frontend Enginner @ HUI',
  },
  homer: {
    name: '호머 심슨',
    description: '심슨 가족에 나오는 캐릭터',
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileDate[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;