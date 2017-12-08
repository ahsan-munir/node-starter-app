console.log("I am from webpack");
const name = 'Scotch.io';
// const styles = require('./styles')
//setTimeout(() => alert(`Hello there from ${name}`), 300);

const getAlert = () => { console.log("Here is Console Message!!"); }
getAlert();

'use strict' 
var roles = new Map([ 
   ['r1', 'name'], 
   ['r2', 'ahsan'], 
   ['r3', 'munir'], 
]);
for(let r of roles.entries()) 
console.log(`${r[0]}: ${r[1]}`);

// object pattern matching
let {lName, fName} = {fName: 'John', age: 15, lName: 'Doe'};

// array pattern matching
let [first, second, third] = [8, 4, [100, -5, 20]];

// output: Doe, John
console.log(lName + ', '+ fName);

// output: 100, 4, 8
console.log(third, second, first);



function join(separator, ...values) {
	return (separator, values);

	//return values.join(separator);
}

// all of the parameters after the first
// are gathered together into `values`
// which is a true `Array`
// output: "one//two//three"
console.log(join('//', 'one', 'two', 'three'));


function getCar(make, model, value) {
	return {
		// with property value shorthand
		// syntax, you can omit the property
		// value if key matches variable
		// name
		make,  // same as make: make
		model, // same as model: model
		value, // same as value: value

		// computed values now work with
		// object literals
		['make' + make]: true,

		// Method definition shorthand syntax
		// omits `function` keyword & colon
		depreciate() {
			this.value -= 2500;
		}
	};
}

let car = getCar('Kia', 'Sorento', 40000);

// output: {
//     make: 'Kia',
//     model:'Sorento',
//     value: 40000,
//     depreciate: function()
// }
console.log(car);

car.depreciate();

// output: 37500
console.log(car.value);


let timeOfDay = (new Date).getHours(),
	mealCost = 7.99,
	tax = 0.09;
console.log(timeOfDay, mealCost, tax);
// any sort of expression can go inside the
// substitution token
// output: Morning/Evening meal: $8.71
console.log(`${timeOfDay < 12 ? 'Morning' : 'Evening'} meal: $${(mealCost * (1 + tax)).toFixed(2)}`);

let eventCardInfo = {
		title: 'Nodevember 2015',
		url: 'http://nodevember.org/',
		tagline: 'Two days of Node and JavaScript',
		tags: ['JavaScript', 'Node']
	},
	{title, url, tagline, tags} = eventCardInfo,
	html = `<section>
				<h3><a href="${url}">${title}</a></h3>
				<p>${tagline}</p>
				<ul>
					${
						tags.map(
							tag => `<li>${tag}</li>`
						).join('\n')
					}
				</ul>
			</section>`;

//console.log(html);



let list = [8, 3, 11, 9, 6];

for (let value of list) {
  console.log(value);
}



(function() {
	'use strict';

	{ // class declarations
		class InheritanceError extends Error { }

		// Define base Note class
		class Note {
			constructor(id, content, owner) {
				// make `Note` an abstract base class
				if (new.target === Note) {
					throw new InheritanceError('Note cannot be directly constructed.')
				}

				this._id = id;
				this._content = content;
				this._owner = owner;
			}

			static add(...properties) {
				// `this` will be the class on which `add()` was called
				// increment counter
				++this._idCounter;

				let id = `note${this._idCounter}`;

				// construct a new instance of the note passing in the
				// arguments after the ID. This is so subclasses can
				// get all of the arguments needed
				let note = new this(id, ...properties);

				// add note to the lookup by ID
				this._noteLookup[id] = note;

				return note;
			}

			static get(id) {
			  	return this._noteLookup[id];
			}

			// read-only
			get id() { return this._id; }

			get content() { return this._content; }
			set content(value) { this._content = value; }

			get owner() { return this._owner; }
			set owner(value) { this._owner = value; }

			toString() {
				return `ID: ${this._id}
					Content: ${this._content}
					Owner: ${this._owner}`;
			}
		}

		// Static "private" properties (not yet supported in class syntax)
		Note._idCounter = -1;
		Note._noteLookup = {};

		class ColorNote extends Note {
			constructor(id, content, owner, color='#ff0000') {
				// super constructor must be called first!
				super(id, content, owner);
				this._color = color;
			}

			get color() { return this._color; }
			set color(value) { this._color = value; }

			toString() {  // computed method names are supported
				// Override `toString()`, but call parent/super version
				// first
				return `${super.toString()}
					Color: ${this._color}`;
			}
		}

		// `add` factory method is defined on `Note`, but accessible
		// on ColorNote subclass
		let colorNote = ColorNote.add('My note', 'benmvp', '#0000ff');

		// output: ID: note0
		// Content: My Note
		// Owner: benmvp
		// Color: #0000ff
		console.log(`${colorNote}`);

		// output: true
		console.log(Note.get('note0') === colorNote);

		try {
			new Note(72, 'Vanilla note', 'benmvp');
		}
		catch (e) {
			// output: true
			console.log(e instanceof InheritanceError);
		}
	};

}) ();

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        Welcome to React!
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
