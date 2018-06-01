import React, {Component} from 'react';
// import './Pagination.module.scss';

class Pagination extends Component{
    render(){
        return <Pager>
                    <Pager.Item href="#">Previous</Pager.Item>{' '}
                    <Pager.Item href="#">Next</Pager.Item>
                </Pager>;
    }
}

export default Pagination;