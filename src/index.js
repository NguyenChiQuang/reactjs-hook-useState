import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
  
    function increment() {
      setCount(count + 1);
    }
  
    function decrement() {
      setCount(count - 1);
    }
  
    useEffect(() => setMessage(`count is ${count}`), [count, message]);
  
    return (
      <div className="App">
        <h1>Update Count!</h1>
        <p>Count: {count}</p>
        <p>{message}</p>
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
