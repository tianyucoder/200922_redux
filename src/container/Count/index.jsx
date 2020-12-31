import CountUI from '../../components/Count'
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

import {connect} from 'react-redux'

function mapStateToProps(state){
	return {
		sum:state
	}
}

function mapDispatchToProps(dispatch){
	return {
		jia: value => dispatch(createIncrementAction(value)),
		jian: value => dispatch(createDecrementAction(value)),
		jiaAsync: (value,time) => dispatch(createIncrementAsyncAction(value,time)),
	}
}

const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

export default CountContainer
