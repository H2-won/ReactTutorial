// 함수를 리턴하는 함수를 리턴하는 함수 myLogger
const myLogger = (store) => (nex) => (action) => {
  console.log(action);
  console.log('\tPrev:', store.getState());
  // 액션을 다음 미들웨어한테 전달, 없다면 리듀서한테 전달
  const result = nex(action);

  // 액션이 리듀서에서 모두 처리가 되고, 그 다음 상태를 가져와서 콘솔에 출력
  console.log('\tNext:', store.getState());
  return result;
};

export default myLogger;
