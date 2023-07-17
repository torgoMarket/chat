import './App.scss';
import Chat from './pages/Chat';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/chat' element={<Chat />}></Route>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App; 
