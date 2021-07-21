import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  // 画面に表示する内容を配列で定義
  const testArr = [
     {title: "name1", number: 1},
     {title: "name2", number: 3},
     {title: "name3"}
  ]

//  render(){ 
    return (
         // map()関数を用いて配列をLoop
         testArr.map((val, index) => {
           // 下で定義したComponent_test()を呼び出す。引数には配列の内容を指定
           return <Component_test props1={val.title} props2={val.number} key={index}/>
         })
    )
//  }

}

const Component_test = (val) => {
        // propsを受け取ってHTMLをreturn
	return <div>{val.props1}, {val.props2}</div>
}
Component_test.defaultProps = {
  // propsがない場合の初期値を設定
//  props2: 99999
  props2: "99999"
}
Component_test.propTypes = {
  // "props2"というpropsの型チェック
//  props2: PropTypes.number.isRequired
  props2: PropTypes.number
}

export default App;
