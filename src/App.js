import React, { Component } from 'react';
/*
function App() {
  return (<div>Hello World!</div>);
}
*/
class App extends Component{
/*
  render() {
   const change = "Hello Japan";
   const dom = <h1 className="test">{change}</h1>;
   return dom;
*/
/*
   return React.createElement(
	"h1",
	null,
	"Hello, World"
   );
*/
  render() {
    return <input type="text" onClick={() => {console.log("text click")}}     />;
  }
}
export default App;
