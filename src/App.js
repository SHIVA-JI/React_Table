
import './App.css';
import Table from './components/Table';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { useSelector } from 'react-redux';

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


