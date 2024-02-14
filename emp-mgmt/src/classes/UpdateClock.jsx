import { Component } from "react";

export default class UpdateClock extends Component{

    returnCurrentTime(){
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    constructor(props){
        super(props);
        this.state = {
            currentTime: this.returnCurrentTime(),
            counter: 0,
            applicationUser: "Random"
        }

        setInterval(()=>{
            this.setState({
                counter: this.state.counter + 1
            })
        },1000)

        setInterval(()=>{
            this.setState({
                currentTime: this.returnCurrentTime()
            })
        },1000)

    }

    
    IncCount = () => {
        this.setState({
            counter: this.state.counter + 100
        })
    }

    UpdateValue = (event) =>{
        this.setState({
            applicationUser: event.target.value
        })
    }

    render(){
        return (
            <div>
                {/* Data Binding:- Entered value is shown on screen simultanously*/}
                Enter Name: <input value={this.state.applicationUser} type="text" onChange={this.UpdateValue} />
                Entered Name is: {this.state.applicationUser}

                <h1>The Current Time is: {this.state.currentTime} </h1>
                <h1>{this.props.Username}'s Counter is: {this.state.counter} </h1>
                <input type="button" value="Inc Counter" onClick={this.IncCount} />
            </div>
        )
    }

    componentDidMount(){ // this function executes after all the components are rendered for first time 
        
    }
}