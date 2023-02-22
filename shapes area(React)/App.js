import logo from './logo.svg';
import "./component/style.css"
import './App.css';
import {Square,Rectangle,Circle,Triangle,Cube} from './component/shapes';
function App() {
  return (
    <div className='parent'>
      <Square />
      <Triangle />
      <Cube />
      <Rectangle />
      <Circle />
    </div>
  );
}

export default App;
