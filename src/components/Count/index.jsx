import React, { Component } from 'react'

export default class Count extends Component {
	state = {
		wind:'北风6级'
	}

	increment = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		
	}

	decrement = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
	}

	incrementIfOdd = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
	}

	incrementAsync = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
	}

	render() {
		console.log('Count的UI收到的props是',this.props)
		return (
			<div>
				<h2>当前求和为：????</h2>
				<div>今天：{this.state.wind}</div>
				<select ref={c => this.numberNode = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		)
	}
}
