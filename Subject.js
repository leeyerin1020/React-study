import React, {Component } from 'react';

/*Subject라는 이름의 컴포넌트를 만드는 틀!*/
class Subject extends Component {
    render() { /* class안에 선언한 함수는 이렇게 render() 함수 이름만으로도 ok*/ 
      return ( /* return(); 이렇게 해주면 끝*/
      <header>
              <h1><a href="/">{this.props.title}</a></h1>
              {this.props.sub}
          </header> /*함수 안에 넣어주는건-> 최상위 태그가 감싸고 있어야함!*/
    );
    } 
  }

  export default Subject;
  /*export를 통해 외부에서 이 component 사용할 수 있도록 해준다*/