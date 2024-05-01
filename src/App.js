
import './App.css';
import Table from './components/Table';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <>
    <div className='App'>
        <div className='Header'><Navbar/></div>
        <div className='Below-Header'>
          <div className={`SideNav ${isOpen ? 'open' : 'closed'}`}> <SideNav/> </div>
          <div className='Table-part'> <Table/> </div>
      </div>
    </div>
    </>
  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
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
      </header>
    </div> */}