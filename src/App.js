import React, { Component } from "react";
import TerminatorList from './components/terminator-list/terminator-list.component';
import { models } from './models.js';
import SearchBox from './components/searchbox/searchbox.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            models: models,
            searchfield: "",
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredModels = this.state.models.filter((model) => {
            return model.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
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