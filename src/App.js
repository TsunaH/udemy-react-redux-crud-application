import React, { Component } from 'react';
/*
function App() {
  return (<div>Hello World!</div>);
}
*/
/*
const testArr = [
  {title: "name1", detail: "detail1"},
  {title: "name2", detail: "detail2"},
]
*/
//class App extends Component{
const App = () => {

/*
  render() {
   const change = "Hello Japan";
   const dom = <h1 className="test">{change}</h1>;
   return dom;
  }
*/
/*
   return React.createElement(
	"h1",
	null,
	"Hello, World"
   );
*/
/*
  render() {
    return <input type="text" onClick={() => {console.log("text click")}}     />;
  }
*/
  const testArr = [
     {title: "name1", detail: "detail1"},
     {title: "name2", detail: "detail2"},
     {title: "name3"}
  ]

//  render(){ 
    return (
         testArr.map((val) => {
           return <Component_test props1={val.title} props2={val.detail}/>
         })
    )
//  }

}

const Component_test = (val) => {
	return <div>{val.props1}, {val.props2}</div>
}
Component_test.defaultProps = {
  props2: "default"
}


export default App;
