import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectTrack} from '../actions/index';
import {Pager} from 'react-bootstrap'
import ActiveTrack from "../containers/active-track"
import '../styles/TraccksList.css';


class TrackList extends Component {
    constructor(props) {
        super(...props);

        this.state = {
            currentPage: 0
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.tracks.length > 0){
            this.props.selectTrack(nextProps.tracks[0][0])
        }
    }

    prevPage = () => {
        if(this.state.currentPage != 0){
            this.setState({
                currentPage: --this.state.currentPage
            });
        }
    }
    nextPage = () => {
        if(this.state.currentPage != this.props.tracks.length-1){
            this.setState({
                currentPage: ++this.state.currentPage
            });
        }
    }

    renderList = () => {
        if ( this.props.tracks.length === 0) {
            return null;
        }

        return (
            this.props.tracks[this.state.currentPage].map(track => {
                return (
                    <li className="row liItem" onClick={() => this.props.selectTrack(track)} key={track.id}>
                        <div className="col-sm-1 trackImg"></div>
                        <div className="liWrapper col-sm-10">
                            <div className="row">
                                <span className="userName">{track.user.username}</span>
                            </div>
                            <div className="row">
                                <span className="trackName col-sm-12">{track.title}</span>
                            </div>
                        </div>
                    </li>

                );
            })
        );
    }

    render() {
        console.log("props", this.props/*&&this.props.tracks ? this.props.tracks[1] : 911*/);
        console.log(this.state)
        return (
            <div className="row">
                <div className="col-sm-offset-1 col-sm-5 listPadding">
                    <ul className="SClist">
                        {this.renderList()}
                    </ul>
                    <Pager>
                        <Pager.Item previous  href="#" onClick = {this.prevPage}>&laquo;</Pager.Item>{' '}
                        <Pager.Item next href="#" onClick = {this.nextPage}>&raquo;</Pager.Item>
                    </Pager>
                </div>
                <ActiveTrack />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tracks: state.tracks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectTrack: selectTrack}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);