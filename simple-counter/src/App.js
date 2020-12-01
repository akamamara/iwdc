import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [counter, setCounter] = useState(0);
	const handleIncrement = () => {
		setCounter(prevCount => prevCount + 1);
	}
	const handleDecrement = () => {
		setCounter(prevCount => prevCount - 1);
	}
	return (
		<div className="App">
			<header className="App-header">
				<h1>Simple Counter</h1>
				<h5>
					{counter}
				</h5>
				<div>
					<button onClick={handleIncrement}>+</button>
					<button onClick={handleDecrement}>-</button>
				</div>
				<button onClick={() => setCounter(0)}>Reset</button>
			</header>
		</div>
	);
}

export default App;
