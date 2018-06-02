import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeLastSearch} from '../actions'
import '../styles/Badge.css'

import _ from 'lodash'


class LastFiveFearches extends Component {

    getSelectedSearch(search) {
        const {onGetSelectedSearch} = this.props;
        onGetSelectedSearch(search);
    }

    deleteLastSearch(e, search){
        e.preventDefault();
        e.stopPropagation();
        this.props.closeLastSearch(search);
    }

    render() {
        let last5 = 'Last five:';
                return (
                        <div className="row">
                            <div className="col-sm-offset-1 col-sm-1 lastFive">
                                {this.props.searches && this.props.searches[0] != "" && this.props.searches != null ?
                                last5 : null}
                                </div>
                            <div className="col-sm-5 badgeWrap">

                                {this.props.searches && this.props.searches[0] != "" && this.props.searches != null?
                                    this.props.searches.map((search, i) => {
                                    return (
                                        <span key={i} className="badge" onClick={() => this.getSelectedSearch(search)}>{search}
                                        <i className='close' onClick={(e) => this.deleteLastSearch(e,search)}>x</i>
                                        </span>
                                    );
                                }) : null}

                            </div>
                        </div>
                )
    }

}


function mapStateToProps(state) {
    return {
        searches: state.lastFiveSearches
    }
}

export default connect(mapStateToProps, {closeLastSearch})(LastFiveFearches);