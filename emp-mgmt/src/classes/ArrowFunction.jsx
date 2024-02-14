import { Component } from "react";

export default class ArrowFunction extends Component{

    constructor (props){
        super(props);
        this.state = {
            userName: "Vaibhav"
        }
        this.alertData = this.alterData.bind(this)
    }

    alterData (event) {
        var res = prompt("Enter your name");
        alert(" Hello " + res + " from " + this.state.userName)

    }

    render(){
        return (
            <div>
                <input type="button" value="Alert" onClick={this.alertData} />
            </div>
        )
    }
}