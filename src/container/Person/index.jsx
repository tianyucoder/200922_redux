import React, { Component } from 'react'
import {connect} from 'react-redux'

class Person extends Component {
	state = {
		name:'',
		age:''
	}

	addPerson = ()=>{
		//获取用户的输入
		const {name,age} = this.state
		console.log(name,age)
	}

	savePersonData = type => event => this.setState({[type]:event.target.value})

	render() {
		return (
			<div>
				<h1>我是Person组件</h1>
				<h4>我读取Count组件的和是：{this.props.sum}</h4>
				<input onChange={this.savePersonData('name')} type="text" placeholder="名字"/>
				<input onChange={this.savePersonData('age')} type="text" placeholder="年龄"/>
				<button onClick={this.addPerson}>添加</button>
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
	state => ({sum:state.he})
)(Person)
