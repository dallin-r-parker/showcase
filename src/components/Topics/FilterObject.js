import React, {Component} from 'react';

export default class FilterObject extends Component {
	constructor() {
		super();

		this.state = {
			unFilteredArray: [
				{name:'Dallin', age: 24, hairColor: 'blonde', gender: 'male' },
				{name:'Mikayda', age: 25, hobbies: 'Banjo', gender: 'female' },
				{name:'Jan', age: 64, hobbies: 'Art', gender: 'female' },
				{name:'Mckay', age: 26, hairColor: 'Black', profession: 'BMW Service Rider' },
				{name:'Daniel', age: 34, height: '6ft 3in', gender: 'male' }
			],
			userInput: '',
			filteredArray: []
		}
	}

	filterInput(val) {
		const unfiltered = this.state.unFilteredArray;
		const filtered = [];

		unfiltered.filter((prop) => {
			if(prop.hasOwnProperty(val)) {
				filtered.push(prop)
			}
		});
		this.setState({filteredArray: filtered});
	}

	handleChange(value) {
		this.setState({userInput: value})
	}

	render() {
		return (
			<div className="puzzleBox filterObjectPB">
				<h4></h4>
				<span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
				<input className="inputLine" onChange={(e) => {this.handleChange(e.target.value)}} />
				<button className="confirmationButton" onClick={() => { this.filterInput(this.state.userInput)}}>Filter</button>
				<span className="resultsBox filterObjectPB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
			</div>
		)
	}
}