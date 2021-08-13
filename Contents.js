import React, {Component } from 'react';
class Contents extends Component{
    render(){
      return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.cont}
      </article>
      );
      /*props-> attribute임! this.props.이름 이렇게해서 속성을 받아줄 수 있도록!*/
    }
  } 
  export default Contents;