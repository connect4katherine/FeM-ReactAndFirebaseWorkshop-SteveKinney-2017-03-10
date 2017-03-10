import React, {Component} from "react";
import {database} from "./firebase";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        database.ref().on('value', (snapshot) => {
            this.setState({
                data: snapshot.val(),
                newData: ''
            });
        });
    }

    handleChange(event) {
        const newData = event.target.value;
        this.setState({
            newData
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        database
            //.ref('/AmazingNewData')   // works like a path
            //.child('/AmazingNewData') // no longer need this with ref on line above
            //.set(this.state.newData); // this replaces the contents of the key
            .ref('/Amazing/New/Data')   // the paths are all created on the way down
            .push(this.state.newData);  // this appends new data to the key (assigns a random unique key)
    }


    render() {
        return (
            <div className="App">
                <div className="App--header">
                    <h2>Welcome to React and Firebase</h2>
                </div>
                <pre className="App--data">
                    { JSON.stringify(this.state.data, null, 2) }
                </pre>

                <form className="App--form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newData} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default App;
