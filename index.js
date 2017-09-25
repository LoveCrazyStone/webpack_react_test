var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './src/redux/reducer'

import { Header } from './src/components/common/header/header';
import { Contain } from './src/components/common/contain/contain';
import './static/css/global.less'
let store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Header name = "大数据轨迹分析展示系统"/>
            <Contain/>
        </div>
    </Provider>, 
    document.getElementById('app')
);