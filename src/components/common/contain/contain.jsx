var React=require('react');
import './contain.less';
import {ChartContain} from '../../logic/chartcontain/chartcontain';
export class Contain extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
       $(".mycontain").css("height",$(window).height()-70);
    }
    componentWillUnmount() {

    }
    render(){
        const { store } = this.props;
        // const state = store.getState();
         console.log(store);
        return(
            <div className='mycontain'>
                <div className="top"></div>
                <div className="left">
                    <ChartContain left="true" top="true" title="位置Top5" contain="<div>Main Body</div>">     
                         <div data-slot="main">Main Body</div>
                    </ChartContain>
                    <ChartContain left="true" bot="true" title="效率Top5" contain="bbb"/>
                </div>
                <div className="right">
                    <ChartContain right="true" top="true" title="轨迹统计" contain="ccc"/>
                    <ChartContain right="true" bot="true" title="资源统计" contain="ddd"/>
                </div>
                <div className="bottom"></div>    
            </div>
        )
    }
};