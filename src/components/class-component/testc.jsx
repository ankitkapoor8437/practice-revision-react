import { Component } from "react"
import '../functional-component/testf.css'


// Using Props and destructuring props.
export class StudentClass extends Component {
    render(props) {
        const { name, classPosition } = this.props
        return <div className="student">
            <h3>Class Component</h3>
            <h1>Name : {name} </h1>
            <span>Class: {classPosition} </span>
            <span>Phone Number: {this.props.contact} </span>
            <span>Email: {this.props.email} </span>
        </div>
    }
};
