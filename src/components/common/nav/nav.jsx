var React = require('react');
import  './nav.less';
export class Nav extends React.Component{
    constructor(props){
        super(props);
      
    }
    componentDidMount() {
      
    }
   
    render(){
        var items =[];
        this.props.modules.map(function(item){
            items.push(<li>{item.text}</li>);
        });

        return (
            <ul className="nav_ul">
                {items}
            </ul>
        );
    }
}