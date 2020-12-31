//该文件是Count的容器组件，用于连接Count的UI 和 redux

//引入Count的UI组件(左手边的)
import CountUI from '../../components/Count'
import {createIncrementAction} from '../../redux/count_action'

//引入connect，用于：连接UI与redux、生成容器组件
import {connect} from 'react-redux'

/* a函数的返回值必须是一个对象
返回的这个对象的key就作为传递给UI组件的props的key
返回的这个对象的value就作为传递给UI组件的props的value
a函数主要用于给UI组件传递状态 */
function mapStateToProps(state){
	return {
		sum:state
	}
}

/* b函数的返回值必须是一个对象
返回的这个对象的key就作为传递给UI组件的props的key
返回的这个对象的value就作为传递给UI组件的props的value
b函数主要用于给UI组件传递操作状态的方法 */
function mapDispatchToProps(dispatch){
	return {
		jia: value => dispatch(createIncrementAction(value)) 
	}
}

//连接UI与redux、生成容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

//暴露容器组件
export default CountContainer
