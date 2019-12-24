import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		// let firstValue: string = 'Manny';
		// let secondValue: number = 34;
		// let thirdValue: boolean = true;
		// let fourthValue: number[] = [2, 3, 45];
    // let fifthValue: Array<string> = ['2', 'cat', 'David'];

    // tuple
    let aTuple: [string, number] = ['Manny', 34];

    // enum
    enum Codes { first = 1, second = 2};

    // any
    let firstName: any = 'Manny';

    // void
    const warning = (): void => {
      console.log('warning')
    }

		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						The value {aTuple[0]} is of {typeof aTuple[0]} type!
					</p>
					{/* <p>
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
					</p> */}
				</header>
			</div>
		);
	}
}

export default App;
