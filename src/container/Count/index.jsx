//该文件是Count的容器组件，用于连接Count的UI 和 redux

//引入Count的UI组件(左手边的)
import CountUI from '../../components/Count'

//引入connect，用于：连接UI与redux、生成容器组件
import {connect} from 'react-redux'

//连接UI与redux、生成容器组件
const CountContainer = connect()(CountUI)

//暴露容器组件
export default CountContainer
