var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import { Slot } from 'react-slotted';
import  './chartcontain.less';
var classNames = require('classnames') //加载Classname的绑定
export class ChartContain extends React.Component{
    constructor(props){
        super(props);
        this.state = {children:props.contain};
    }
    componentDidMount() {
      setTimeout(()=>this.startshow(),400);
    }
    startshow(){
        this.setState({
            display:true
        })
    }
    render(){

        var myclass=classNames({
            myChartContain:true,
            left_top:(this.props.left && this.props.top),
            left_bot:(this.props.left && this.props.bot),
            right_bot:(this.props.right && this.props.bot),
            right_top:(this.props.right && this.props.top),
        });
        return(
           
             <ReactCSSTransitionGroup 
                    transitionName="example" 
                    transitionAppear={true}>
                <div className={myclass} key={this.props.title}> 
                    <div className="c_title">{this.props.title}</div>
                    <div className="c_contain">
                       <button>click</button>
                    </div>  
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

 // <div className="c_contain" dangerouslySetInnerHTML={{ __html: this.state.children}}>
 // </div>