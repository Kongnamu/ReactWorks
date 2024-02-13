import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent1';

function App() {
  return (
    <div className="App">
     <h1>리액트 시작하기2</h1>
     <MyComponent name={"ZICO"} age={32} />
     <img src={logo} className="App-logo" alt="로고"/>
    </div>
  );
}
export default App;
