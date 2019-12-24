import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		let firstValue: string = 'Manny';
		let secondValue: number = 34;
		let thirdValue: boolean = true;
		let fourthValue: number[] = [2, 3, 45];
		let fifthValue: Array<string> = ['2', 'cat', 'David'];
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						The value {firstValue} is of {typeof firstValue} type!
					</p>
					<p>
						The value {secondValue} is of {typeof secondValue} type!
					</p>
					<p>
						The value {thirdValue} is of {typeof thirdValue} type!
					</p>
					<p>
						The value {fourthValue} is of {typeof fourthValue} type!
					</p>
					<p>
						The value {fifthValue} is of {typeof fifthValue} type!
					</p>
				</header>
			</div>
		);
	}
}

export default App;
