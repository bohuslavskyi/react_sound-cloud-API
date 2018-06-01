import React, {Component} from 'react';
// import './PlayerWidget.module.scss';

class PlayerWidget extends Component{
    render(){
        return  <div className="widget col-sm-5">
                    <iframe
                        width='100%'
                        height='450'
                        scrolling='no'
                        frameBorder='no'
                        allow='autoplay'
                        src= "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/450808575&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                </div>
    }
}

export default PlayerWidget;