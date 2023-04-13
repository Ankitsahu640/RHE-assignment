import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardPage from './componenet/CardPage';
import Login from './componenet/Login';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/view" element={<CardPage/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
