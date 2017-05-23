import React, {Component} from 'react';

export default class Palindrome extends Component {
	constructor() {
		super();

		this.state = {
			userInput: '',
			palindrome: ''
		}
	}

	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Palindrome</h4>
				<input className="inputLine"/>
				<button className="confirmationButton"></button>
				<span className="resultsBox"></span>
			</div>
		)
	}
}