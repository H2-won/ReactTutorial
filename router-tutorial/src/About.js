import React from 'react';
import qs from 'qs';

function About({ location }) {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  console.log(query);

  const detail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 예제 프로젝트입니다.</p>
      {detail && <h1>detail 값은 true 입니다. </h1>}
    </div>
  );
}

export default About;
