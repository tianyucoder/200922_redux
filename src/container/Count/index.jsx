import CountUI from '../../components/Count'
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'
import {connect} from 'react-redux'

//普通写法
/* const mapDispatchToProps = dispatch => ({
	jia: value => dispatch(createIncrementAction(value)),
	jian: value => dispatch(createDecrementAction(value)),
	jiaAsync: (value,time) => dispatch(createIncrementAsyncAction(value,time))
}) */

//精简写法
/* const mapDispatchToProps = {
	jia:createIncrementAction,
	jian:createDecrementAction,
	jiaAsync:createIncrementAsyncAction
} */


export default connect(
	state => ({sum:state}), //映射状态
	//映射操作状态的方法
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction
	}
)(CountUI)
