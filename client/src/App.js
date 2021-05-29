import logo from './logo.svg';
import './App.css';
import { SwapCards } from './template/SwapCards'
import { LoginPage } from './template/LoginPage'
import { ChatRoom } from './template/ChatRoom'

function App() {
  return (
    <div className="App">
      <SwapCards />
      <LoginPage />
      <ChatRoom />
    </div>
  );
}

export default App;
