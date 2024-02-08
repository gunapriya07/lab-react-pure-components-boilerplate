import React, {PureComponent} from "react";

class PureCounterComponent extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            toggleStatus:false,
        }
    }
    handleInc = () => {
        // console.log(this.state.toggleStatus);
        if(this.state.toggleStatus){
            this.setState({...this.state, count:this.state.count+1});
        }else{
            this.setState({...this.state,count:this.state.count})
        }
    }
    handleToggle = () => {
        this.setState({...this.state,toggleStatus:!this.state.toggleStatus})
    }
    render(){
    console.log('This is Pure Component',this.state.toggleStatus);
        return(
            <div>
                <div>
                    <h2>Pure Counter Component</h2>
                    <h3>{this.state.count}</h3>
                </div>
                <div>
                    <button onClick={this.handleToggle}>Set Toggle</button>
                    <button onClick={this.handleInc}>Counter</button>
                </div>
            </div>
        )
    }
}
export default PureCounterComponent;