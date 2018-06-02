import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeLastSearch} from '../actions'

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
        if(this.props.searches[0] != ""){
                return (
                        <div className="row">
                            <div className="col-sm-offset-1 col-sm-1 lastFive">Last five:</div>
                            <div className="col-sm-5 badgeWrap">

                                {this.props.searches.map(search => {
                                    return (
                                        <span className="badge" onClick={() => this.getSelectedSearch(search)}>{search}
                                        <i className='close' onClick={(e) => this.deleteLastSearch(e,search)}>x</i>
                                        </span>
                                    );
                                })}

                            </div>
                        </div>
                )
        }else {
            return null
        }
    }

}


function mapStateToProps(state) {
    return {
        searches: state.lastFiveSearches
    }
}

export default connect(mapStateToProps, {closeLastSearch})(LastFiveFearches);