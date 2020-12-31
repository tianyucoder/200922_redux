import React, { Component } from 'react'
import {connect} from 'react-redux'

class Person extends Component {
	render() {
		return (
			<div>
				<h1>我是Person组件</h1>
				<h4>我读取Count组件的和是：{this.props.sum}</h4>
				<input type="text" placeholder="名字"/>
				<input type="text" placeholder="年龄"/>
				<button>添加</button>
				<ul>
					<li>老刘-78</li>
					<li>海峰-18</li>
					<li>强哥-12</li>
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({sum:state})
)(Person)
