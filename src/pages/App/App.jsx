import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

function App() {

  const [user, setUser] = useState(null);

  return (
    <main className="App">
      { user ?
      <>
       <NavBar/>
        <Routes>
          <Route path='/orders/new' element={<NewOrderPage />} />
          <Route path='/orders' element={<OrderHistoryPage />} />
        </Routes>
      </>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
