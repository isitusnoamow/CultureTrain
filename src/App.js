import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <h1 className='title'>Culture Station</h1>
      <div className='flow'>
        <Link to="/China" className='china'>
          <div>
            <div className='chinaimg'></div>
            <h1 className='chinatitle'>C<span id="china1">h</span>ina</h1>
          </div>
        </Link>
        <Link to="/Japan" className='japan'>
          <div>
            <div className='japanimg'></div>
            <h1 className='japantitle'>Ja<span id="japan1">p</span>an</h1>
          </div>
        </Link>
        <Link to="/Usa" className='usa'>
          <div>
            <div className='usaimg'></div>
            <h1 className='usatitle'>U<span id="usa1">S</span><span id='usa2'>A</span></h1>
          </div>
        </Link>




      </div>
    </div>
  );
}

export default App;
