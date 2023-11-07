import './App.css';
import imgsrc from '../src/3ban.jpg'

function App() {
  return (
    <header>
        <nav>
            <a href="#">프론트랜드</a>
            <a href="#">마이페이지</a>
            <a href="#">프론트랜드 가입(현재 막힘)</a>
            <a href="#">그렇게 할거면 프론트랜드 나가</a>
            <img src={imgsrc} alt="3반"></img>
        </nav>
    </header>
  );
}

export default App;
