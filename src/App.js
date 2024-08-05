import React from 'react'; // 리액트 라이브러리를 현재의 파일에 가져오는 코드
// 리액트의 기능을 사용하겠다는 의미
import './App.css';

// 함수형 컴포넌트
function App() {
  // 리액트에서는, JSX를 반환하는 함수의 경우 
  // 반드시 return 문을 포함해야 UI가 렌더링됨
  return (
    <div className="App">
      <p className="skyblue"> ANSEON </p>
      <p className="skyblue"> ANSEON </p>
      <p className="skyblue"> ANSEON </p>
      <p className="skyblue"> ANSEON </p>
      <p className="skyblue"> ANSEON </p>
    </div>
  )
}

export default App;


