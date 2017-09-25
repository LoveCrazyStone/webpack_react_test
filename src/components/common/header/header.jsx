var React =require('react');
var axios =require('axios');
import './header.less';
import {Nav} from '../../common/nav/nav';
export  class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            modules:[
                {id:'home',text:'首页'},
                {id:'datasearch',text:'数据检视'},
                {id:'track',text:'轨迹分析'},
                {id:'analyse',text:'专题分析'}
            ]    
        }
    }

    componentDidMount() {
        // axios.get("/mlfw/getfuck").then((res)=>{ 
		//     // 处理成功的结果 
		//    this.setState({ name: res.data });
		//    }),((res)=> { 
		//    // 处理失败的结果 
		// });
    }
    componentWillUnmount() {

    }
	render(){ 
		return(
			<div className="myheader">
                <div className="header_logo">
                    <img src={require('./logo.png')}/>
                    <label>{this.props.name}</label>
                </div>
                <Nav modules={this.state.modules}/>
			</div>
		)	
	}
};






//写法一
var ProductBox = React.createClass({
    render: function() {
        return ( <div class = "aa">
            Hello World </div>
        );
    }
});
//写法二
function Welcome2(props) {
    return <h1> Hello, { props.name } </h1>;
};

//写法三 es6
class Welcome extends React.Component {
    render() {
        return <h1> Hello, { this.props.name } </h1>;
    }
};