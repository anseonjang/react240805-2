import logo from './logo.svg';
// 로고이미지연결 
import './App.css';
// App.css 파일 연결 
// 앱이라는 컴포넌트 정의
function App() {
  // 컴포넌트의 JSX 부분
  return (
        <div className="App">
      {/* 헤더정의 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

         ANSEON EMOTION SITE
        </p>
        {/* 리액트 공식문서연결링크 */}
        <a
          className="App-link"
          href="https://anseonjang.github.io/emotion/"
          target="_blank"
          rel="noopener noreferrer"
        >
         More
        </a>
      </header>
    </div>
  );
}
// 앱이라는 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내는 코드
export default App;
