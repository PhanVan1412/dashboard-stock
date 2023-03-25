import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SiderBar from './components/SiderBar';
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet';
import Message from './pages/Message/Message';
import Trade from './pages/Trade/Trade';
import Account from './pages/Account/Account';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiderBar />
        {console.log(Trade)}
        <Routes>
            <Route>
                <Route index element={<Home />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="message" element={<Message />} />
                <Route path="trade" element={<Trade />} />
                <Route path="account" element={<Account />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
