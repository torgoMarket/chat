import './App.css';
import Message from './components/message/Message';

function App() {
  return (
    <div className="App">
      <Message message={{
        id: 0,
        name: "Amir"
      }}></Message>
    </div>
  );
}

export default App;
