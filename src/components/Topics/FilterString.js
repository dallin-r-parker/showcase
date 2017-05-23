import React, {Component} from 'react';

export default class FilterString extends Component {
	constructor() {
		super();

		this.state = {
			unFilteredArray: ['dallin', 'mikayda', 'programming', 'swimming'],
			userInput: '',
			filteredArray: []
		}
	}

	handleChange(val) {
		this.setState({userInput: val});
	}

	arrayCheck(userInput) {
		const unfiltered = this.state.unFilteredArray;
		const filtered = [];
		unfiltered.filter((i) => {
			if(i === userInput) {
				filtered.push(i);
			}
		});
		this.setState({filteredArray: filtered})
	}


	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Filter String</h4>
				<span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
				<input className="inputLine" onChange={(e) => {this.handleChange(e.target.value)}} />
				<button className="confirmationButton" onClick={() => {this.arrayCheck(this.state.userInput)}}>Filter</button>
				<span className="resultsBox filterStringPB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
			</div>
		)
	}
}