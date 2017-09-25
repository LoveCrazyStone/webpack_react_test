var React=require('react');
export class Count extends React.Component{
    render(){
        return(
            <label class="count_title">{this.props.title}</label>
            <div className="count_contain">
                
            </div>
        )
    }
}