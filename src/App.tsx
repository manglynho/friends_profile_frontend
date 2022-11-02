import './App.css';
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FriendList } from './components/FriendList';
import { FriendPage } from './components/FriendPage';


function App(){
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/friend/:id' element={<FriendPage />}/>
          <Route path='/' element={<FriendList />}/>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;