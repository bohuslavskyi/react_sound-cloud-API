import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'


class ActiveTrack extends Component {



    render() {
        let url = "https://w.soundcloud.com/player/?url=" + this.props.track.uri + "&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"



        if ( _.isEmpty(this.props.track) ) {
            return null
        }

        return (
            <div  className="widget col-sm-5">
                <iframe
                    width='100%'
                    height='450'
                    scrolling='no'
                    frameBorder='no'
                    src= {url}>
                </iframe>
            </div>


        )
    }

}



function mapStateToProps(state) {
    return {
        track: state.activeTrack
    }
}

export default connect(mapStateToProps)(ActiveTrack);