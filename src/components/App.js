import React, {Component} from 'react';
import './App.css';
import Search from "../containers/search"
import TrackList from "../containers/track-list"
import LasrFiveSearches from "./lasrFiveSearches/lasrFiveSearches"

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header"></div>
                <div className="container">
                    <LasrFiveSearches/>
                    <Search />
                    <TrackList />
                    <div className="col-sm-1"></div>
                </div>
            </div>
        );
    }
}

export default App;


