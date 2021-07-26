import React, { Component } from 'react';
//import PropTypes from 'prop-types';
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
const App = () => (<Counter></Counter>)

class Counter extends Component {
	// 初期化処理
	constructor(props){
		// 親クラスを呼び出す
		super(props)
		// ブラウザのコンソールへの出力
		console.log(this.state)
		// countというstate（変数）への値の代入
		this.state = { count: 0}
	}
	// +1ボタン押下時の処理
	handlePlusButton = () => {
		// stateを変更するメソッド
		// setState()を呼び出すと再renderされる
		this.setState({count: this.state.count + 1})
	}
        // -1ボタン押下時の処理
        handleMinusButton = () => {
                // stateを変更するメソッド
                // setState()を呼び出すと再renderされる
                this.setState({count: this.state.count - 1})
        }
	render() {
		// ↑で代入したcountを画面に表示する
		return (
			<React.Fragment>
				<div>count: {this.state.count}</div>
				<button onClick={this.handlePlusButton}>+1</button>
				<button onClick={this.handleMinusButton}>-1</button>
			</React.Fragment>
		)
	}
}
export default App;
