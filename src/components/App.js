import React, {Component} from 'react';
import '../styles/App.css';
import Search from "../containers/search"
import TrackList from "../containers/track-list"
import LasrFiveSearches from "../containers/last-five-searches"

class App extends Component {

    constructor(props){
        super(props);

        this.state={onCheckLastSearch:''}
    }

    getSelectedSearch = (search) =>{
        console.log("App", search);
        this.setState({onCheckLastSearch: search});
    }

    render() {
        return (
            <div className="App">
                <div className="header"></div>
                <div className="container">
                    <LasrFiveSearches onGetSelectedSearch={this.getSelectedSearch}/>
                    <Search checkedLastSearch={this.state.onCheckLastSearch}/>
                    <TrackList />
                    <div className="col-sm-1"></div>
                </div>
            </div>
        );
    }
}

export default App;


