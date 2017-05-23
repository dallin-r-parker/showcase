import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
	constructor(){
		super();

		this.state = {
			evenArray: [],
			oddArray: [],
			userInput: ''
		}
	}
	assignEvenAndOdd = (userInput) => {
		let arr = userInput.split(',');
		let evens = [];
		let odds = [];

		arr.forEach((key) => {
			key % 2 === 0 ? evens.push(parseInt(key, 10)) : odds.push(parseInt(key, 10));
		});
		this.setState({ evenArray: evens, oddArray: odds});
	};

	handleChange = (val) => {
		this.setState({userInput: val})
	};

	render() {
		return (
			<div className="puzzleBox evenAndOddPB">
				<h4> Evens and Odds </h4>
				<input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
				<button className="confirmationButton" onClick={() => { this.assignEvenAndOdd(this.state.userInput) }}> Split </button>
				<span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
				<span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
			</div>
		)
	}
}