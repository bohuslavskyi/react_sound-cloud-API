import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTtrackList} from '../actions'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount () {
        this.props.getTtrackList();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getTtrackList(this.state.value)
    }

    render(){
        return <div className="row" >
            <form className="searchWrap" onSubmit={this.handleSubmit}>
                <input type="search"
                       className="col-sm-offset-1 col-sm-9"
                       name="q"
                       value={this.state.value}
                       onChange={this.handleChange}/>
                <button type="Submit" className="btn btn-orange col-sm-1">Search</button> {/*onclick="search()"*/}
            </form>
        </div>
    }

}


function mapStateToProps(state) {
    return {
        track: state.activeTrack
    }
}

export default connect(mapStateToProps, {getTtrackList})(Search);

