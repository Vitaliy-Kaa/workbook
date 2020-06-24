// React

// *************  
import React from 'react';
import ReactDOM from 'react-dom';

const myList = (
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
);

ReactDOM.render(myList, document.getElementById('app'));


// **********  Render A Component
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(<MyComponentClass />, document.getElementById('app'));