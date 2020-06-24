//  inline style 

import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{background: 'lightblue', color: 'darkred'}}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);


//  ****  Make A Style Object Variable  ****
// Example.js
import React from 'react';

const styles = {
  color: 'darkcyan',
  background: 'mintcream'
};

export class StyledClass extends React.Component {
  render() {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
}


// styleMe.js
import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100,
  fontSize: 50
};
const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);


//  ***  Style Name Syntax  ***
// In regular JavaScript, style names are written in hyphenated-lowercase: 'background-color': "green"
// In React, those same names are instead written in camelCase: backgroundColor: "green"
import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100,
  fontSize: 50
};
const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);
