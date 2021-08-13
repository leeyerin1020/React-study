import React, {Component } from 'react';
import TOC from "./Components/TOC.js"
import Subject from "./Components/Subject.js"
import  Contents from "./Components/Contents.js"
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state={//state값 초기화!
      subject:{title:'WEB', sub:'World Wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
      /*
      [] 배열안에 여러개 넣어준거임..
      */
    }
  }
  /*
  컴포넌트 실행시 render함수보다 먼저 실행되면서 컴포넌트를
  초기화해주기 위한 코드-> constructor
  */
  render() { 
    return ( 
      /*상위 컴포넌트의 state값을(즉. App의 this.state값)
        하위 컴포넌트의 props값으로(즉, Subject의 this.state.subject.sub)
        전달해준다
      */
    <div className="App">
      <Subject title={this.state.subject.title} 
      sub={this.state.subject.sub}></Subject> 
    
      <Subject title="WW" sub="world wide!"></Subject> 
      <TOC></TOC>
      <Contents title="HTML" cont="HTML is hypertext markup language."></Contents>
    </div>
     /* 이렇게 Subject 컴포넌트를 넣어주면
      web사이트에서는 이 컴포넌트를 리액트가 html문법으로 전달해주기 때문에 
      리액트 존재를 모른다! */
      /* title, cont이런식으로 변수명 써서 속성을 집어넣어준다*/
  );
  } // state를 이용하여 값을 가져오는데 {}이렇게 중괄호에 넣어준다!-> 코드이기때문에 ""안에 넣음X
}

export default App;
