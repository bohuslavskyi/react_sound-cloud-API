import React, {Component} from 'react';
import {connect} from 'react-redux';

class ActiveTrack extends Component {

    render() {
        return (
            <div></div>
        )
    }
}

function mapStateToProps(state) {
    return {
        track: state.activeTrack
    }
}

export default connect(mapStateToProps)(ActiveTrack);