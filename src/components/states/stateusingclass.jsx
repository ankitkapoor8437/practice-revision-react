import { Component } from "react";
import '../functional-component/testf.css'

export class Studentstate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ankit Kapoor",
            class: "Defined",
            contact: "8437926804",
            email: "ankitkapoor8437@gmail.com"
        };
    }

    newChange(props) {
        this.setState({
            name:"Ankit changed",
            class: "unDefined",
            contact: "1234567890",
            email: "ankitkapoor@gmail.com"
        })
    }
    render() {
        return <div className="student">
            <h3>Class State Component</h3>
            <h1>Name : {this.state.name} </h1>
            <span>Class: {this.state.class} </span>
            <span>Phone Number: {this.state.contact} </span>
            <span>Email: {this.state.email} </span>
            <button onClick={() => this.newChange()} >TO CHANGE DATA</button>
        </div>
    }
}