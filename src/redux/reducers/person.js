import {ADD_PERSON} from '../constant'

const initState = [
	{name:"圆圆的海峰",age:18},
	{name:"老刘",age:19}
]

export default function personReducer(preState=initState,action){
	// console.log('@@@@@@@@######%%%%%%')
	const {type,data} = action
	switch (type) {
		case ADD_PERSON:
			return [data,...preState]
		default:
			return preState
	}
}