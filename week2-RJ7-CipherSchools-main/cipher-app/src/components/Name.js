import React,{Component} from "react";

class Name extends Component {
    state = { name: "Shannu!"};

    setName(name) {
        this.setState({...this.state, name})
        constructor(props)
    }

    render() {
        return (
            <>
              <h1>The name is: {this.state.name} </h1>
              <button onClick={this.setName("Amrit")}>Click Me!</button>
            </>
        );
    }
}

export default Name;