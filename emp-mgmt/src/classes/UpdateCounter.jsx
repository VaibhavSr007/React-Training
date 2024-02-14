import { Component } from "react";

export default class UpdateCounter extends Component{

    constructor (){
        super()
        this.state = {
            counter: 0
        }

    }


    updateCountOne = () => {

        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 2
            }, ()=> {
                this.setState({
                    counter: this.state.counter + 3
                }, () => {
                    this.setState({
                        counter: this.state.counter + 4
                    })
                })
            })
        })
    }

    UpdateCountTwo =() =>{
        this.setState({
            counter: this.state.counter + 1
        })
        this.setState({
            counter: this.state.counter + 2
        })
        this.setState({
            counter: this.state.counter + 3
        })
        this.setState({
            counter: this.state.counter + 4
        })
        this.setState({
            counter: this.state.counter + 5
        })
    }

    render (){
        return (
            <div>
                <h1> Counter Value is: {this.state.counter}</h1>
                <input type="button" value="increment1" onClick={this.updateCountOne} />
                <input type="button" value="increment2" onClick={this.UpdateCountTwo} />
            </div>
        )
    }
}