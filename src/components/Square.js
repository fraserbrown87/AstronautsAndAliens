import React, { Component } from 'react';

class Square extends Component{


    handleClick(){
        // console.log(this.props.id)
        this.props.onSquareClicked(this.props.id);
    }


    render(){
        return <button id={this.props.id} className='blank' onClick={this.handleClick.bind(this)}></button>
    }


}

export default Square;