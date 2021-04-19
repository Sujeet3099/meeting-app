import './App.css';
import Meeting from './components/Meeting';
import Sidebar from './components/Sidebar';

import About from './components/About';
import { useSelector } from 'react-redux';

function App() {
  const mainpage = useSelector((state) => state.mainpage);
  return (
    <div className='app'>
      <Sidebar />
      {mainpage && <Meeting />}
      {mainpage || <About />}
    </div>
  );
}

export default App;
