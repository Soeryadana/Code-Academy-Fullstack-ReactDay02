import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent.js';
import FunctionComponent from './FunctionComponent';
import File from './File';
import DisplayJsx from './DisplayJsx';
import CustomFunction from './CustomFunction';
import Counter from './Counter';
import Counter1 from './Counter1';
import CounterHook from './CounterHook';
import ChildClass from './ParentChildClass/ChildClass';
import ParentClass from './ParentChildClass/ParentClass';
import ParentFunction from './ParentChildFunction/ParentFunction';
import RegionViewApi from './RegionView/RegionViewApi';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ClassComponent/>
      <FunctionComponent/>
      <File/>
      <DisplayJsx/>
      <CustomFunction/>
      <Counter/>
      <Counter1/>
      <CounterHook/> */}
      {/* <ParentClass/>
      <ParentFunction/> */}
      {/* <DisplayJsx/> */}
      <RegionViewApi/>
    </div>
  );
}

export default App;
