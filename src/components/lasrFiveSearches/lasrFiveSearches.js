import React, {Component} from 'react';
// import './LasrFiveSearches.module.scss';

class LasrFiveSearches extends Component{
    render(){
        return  <div className="row">
                    <div className="col-sm-offset-1 col-sm-1 lastFive">Last five:</div>
                    <div className="col-sm-5 badgeWrap">
                        <span className="badge">deep
                            <i className='close'>x</i>
                        </span>
                    </div>
                </div>
    }
}

export default LasrFiveSearches;