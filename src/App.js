import React, { Component } from "react";
import TerminatorList from './components/terminator-list/terminator-list.component';
import SearchBox from './components/searchbox/searchbox.component';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            models: [],
            searchfield: "",
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => this.setState({models: users}));
    }

    render() {
        const filteredModels = this.state.models.filter((model) => {
            return model.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })

        if(this.state.models.length === 0) {
            return <h1>Betöltés folyamatban...</h1>
        }


        return (
            <div className="tc">
                <h1>Terminator modellek</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <TerminatorList models={filteredModels} />
            </div>
        );

    }
}

export default App;