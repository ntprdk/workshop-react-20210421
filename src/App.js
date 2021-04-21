import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <ul className="App-header">
        <User info="01" age="55"></User>
        <User info="02"></User>
        <User info="03"></User>
        <Clock />
      </ul>
    </div>
  );
}

export default App;
