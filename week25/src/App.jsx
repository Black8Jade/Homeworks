import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}

function App() {
  return (
    <div>
      <h1>Счётчик</h1>
      <Counter />
    </div>
  );
}

export default App;
